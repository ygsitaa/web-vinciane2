const SECTION_HASHES = ['#home', '#qui-suis-je', '#bibliotheque', '#jardin', '#contact']

export function usePublicNavigation() {
  const route = useRoute()
  const router = useRouter()
  const slider = useSlider()

  const isSecretPage = computed(() => route.path.includes('jardin-secret'))

  const scrollToSection = (index: number) => {
    if (window.innerWidth >= 768) return

    const selector = SECTION_HASHES[index]
    if (!selector) return

    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }

  const goToSection = (index: number) => {
    if (isSecretPage.value) {
      router.push({ path: '/', query: { section: String(index) } })
      return
    }

    slider.goTo(index)
    scrollToSection(index)
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
    sectionHashes: SECTION_HASHES,
  }
}
