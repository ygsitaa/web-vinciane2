import { ref } from 'vue'

const SECTION_HASHES = ['#home', '#qui-suis-je', '#bibliotheque', '#guide', '#jardin', '#petites-tornades', '#contact']
const isProgrammaticSectionNavigation = ref(false)
let sectionNavigationLockTimeout: ReturnType<typeof window.setTimeout> | null = null

const findScrollableContainer = (element: HTMLElement | null): HTMLElement | null => {
  let current = element?.parentElement ?? null

  while (current) {
    const style = window.getComputedStyle(current)
    const overflowY = style.overflowY
    const canScroll = /(auto|scroll|overlay)/.test(overflowY) && current.scrollHeight > current.clientHeight

    if (canScroll) {
      return current
    }

    current = current.parentElement
  }

  return null
}

export function usePublicNavigation() {
  const route = useRoute()
  const router = useRouter()
  const slider = useSlider()

  const isSecretPage = computed(() => route.path.includes('jardin-secret'))

  const clearSectionNavigationLock = () => {
    if (sectionNavigationLockTimeout) {
      window.clearTimeout(sectionNavigationLockTimeout)
      sectionNavigationLockTimeout = null
    }
    isProgrammaticSectionNavigation.value = false
  }

  const lockSectionNavigation = () => {
    isProgrammaticSectionNavigation.value = true

    if (sectionNavigationLockTimeout) {
      window.clearTimeout(sectionNavigationLockTimeout)
    }

    sectionNavigationLockTimeout = window.setTimeout(() => {
      clearSectionNavigationLock()
    }, 900)
  }

  const scrollToSection = (index: number) => {
    if (!import.meta.client || window.innerWidth >= 768) return

    const selector = SECTION_HASHES[index]
    if (!selector) return

    const target = document.querySelector<HTMLElement>(selector)

    if (!target) {
      window.requestAnimationFrame(() => scrollToSection(index))
      return
    }

    const container = findScrollableContainer(target)

    if (container) {
      const targetOffset = target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop
      container.scrollTo({ top: targetOffset, behavior: 'smooth' })
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goToSection = (index: number) => {
    if (isSecretPage.value) {
      router.push({ path: '/', query: { section: String(index) } })
      return
    }

    slider.goTo(index)

    if (!import.meta.client || window.innerWidth < 768) {
      lockSectionNavigation()
      window.requestAnimationFrame(() => scrollToSection(index))
    }
  }

  const goToHome = () => {
    goToSection(0)
  }

  return {
    isSecretPage,
    slider,
    goToSection,
    goToHome,
    scrollToSection,
    isProgrammaticSectionNavigation,
    sectionHashes: SECTION_HASHES,
  }
}
