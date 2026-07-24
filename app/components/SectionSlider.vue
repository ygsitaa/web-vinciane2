<template>
  <div ref="scrollContainer" class="relative w-full h-full overflow-x-hidden overflow-y-auto md:overflow-hidden snap-y snap-mandatory scroll-smooth">
    <div 
      ref="sliderContainer" 
      class="w-full h-auto md:h-full md:flex transition-none md:transition-transform md:duration-0"
    >
      <SectionHome 
        ref="slide0" 
        class="slide-section w-full min-h-screen md:h-full snap-start" 
        @go-to-library="slider.goTo(2)"
        @go-to-contact="slider.goTo(5)"
        :class="{'mobile-block': true}"
      />

      <SectionAbout
        ref="slide1"
        class="slide-section w-full min-h-screen md:h-full snap-start"
        :class="{'mobile-block': true}"
      />

      <SectionLibrary 
        ref="slide2" 
        class="slide-section w-full min-h-screen md:h-full snap-start" 
        :class="{'mobile-block': true}"
      />

      <SectionGuide
        ref="slide3"
        class="slide-section w-full min-h-screen md:h-full snap-start"
        :class="{'mobile-block': true}"
      />

      <SectionTips 
        ref="slide4" 
        class="slide-section w-full min-h-screen md:h-full snap-start" 
        @go-to-contact="slider.goTo(5)"
        :class="{'mobile-block': true}"
      />

      <SectionContact 
        ref="slide5" 
        class="slide-section w-full min-h-screen md:h-full snap-start" 
        :class="{'mobile-block': true}"
      />
    </div>

    <!-- Navigation Arrows (Desktop Only) -->
    <button 
      class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full glass-panel items-center justify-center text-white hover:text-gold hover:scale-110 transition-all cursor-pointer group"
      @click="slider.prev()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full glass-panel items-center justify-center text-white hover:text-gold hover:scale-110 transition-all cursor-pointer group"
      @click="slider.next()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { useSlider } from '../composables/useSlider'
import SectionGuide from './SectionGuide.vue'

const route = useRoute()
const router = useRouter()
const slider = useSlider()
const { scrollToSection } = usePublicNavigation()
const isDesktop = ref(true)

const slide0 = ref<any>(null)
const slide1 = ref<any>(null)
const slide2 = ref<any>(null)
const slide3 = ref<any>(null)
const slide4 = ref<any>(null)
const slide5 = ref<any>(null)
const slides = ref<HTMLElement[]>([])
const scrollContainer = ref<HTMLElement | null>(null)
let sectionObserver: IntersectionObserver | null = null

const updateActiveSection = (index: number) => {
  if (index < 0 || index >= slides.value.length) return
  if (slider.currentIndex.value !== index) {
    slider.currentIndex.value = index
  }
}

const observeVisibleSection = () => {
  if (isDesktop.value || !scrollContainer.value || slides.value.length === 0) {
    sectionObserver?.disconnect()
    return
  }

  sectionObserver?.disconnect()
  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio
          }
          return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
        })[0]

      if (!visibleEntry) return

      const index = slides.value.findIndex((slide) => slide === visibleEntry.target)
      if (index >= 0) {
        updateActiveSection(index)
      }
    },
    {
      root: scrollContainer.value,
      threshold: [0.2, 0.4, 0.6, 0.8],
      rootMargin: '-10% 0px -40% 0px',
    }
  )

  slides.value.forEach((slide) => sectionObserver?.observe(slide))
}

const checkMobile = () => {
  isDesktop.value = window.innerWidth >= 768
  if (!isDesktop.value) {
    // Reset any GSAP styles if we switch to mobile
    slides.value.forEach(slide => {
      gsap.set(slide, { clearProps: 'all' })
    })
    observeVisibleSection()
  } else {
    // Re-apply GSAP styles if switching to desktop
    slides.value.forEach((slide, i) => {
      if (i !== slider.currentIndex.value) {
        gsap.set(slide, { xPercent: 100, autoAlpha: 0 })
      } else {
        gsap.set(slide, { xPercent: 0, autoAlpha: 1 })
      }
    })
  }
}

onMounted(async () => {
  await nextTick()
  
  if (slide0.value && slide1.value && slide2.value && slide3.value && slide4.value && slide5.value) {
    slides.value = [slide0.value.$el, slide1.value.$el, slide2.value.$el, slide3.value.$el, slide4.value.$el, slide5.value.$el]
  } else {
    // Fallback if refs fail for some reason
    const slideEls = document.querySelectorAll('.slide-section')
    slides.value = Array.from(slideEls) as HTMLElement[]
  }

  checkMobile()
  observeVisibleSection()
  window.addEventListener('resize', checkMobile)
  slider.initListeners()

  const sectionQuery = route.query.section
  if (sectionQuery !== undefined && sectionQuery !== null && sectionQuery !== '') {
    const index = Number(sectionQuery)
    if (!Number.isNaN(index) && index >= 0 && index <= 5) {
      slider.goTo(index)
      await nextTick()
      scrollToSection(index)
      router.replace({ path: route.path, query: {} })
    }
  }
})

onUnmounted(() => {
  sectionObserver?.disconnect()
  window.removeEventListener('resize', checkMobile)
  slider.destroyListeners()
})

watch(() => slider.currentIndex.value, async (newIdx, oldIdx) => {
  if (!isDesktop.value) {
    await nextTick()
    scrollToSection(newIdx)
    return
  }
  
  const direction = slider.direction.value
  const currentSlide = slides.value[oldIdx]
  const nextSlide = slides.value[newIdx]
  
  if (!currentSlide || !nextSlide) return
  
  // Exit animation
  gsap.to(currentSlide, {
    xPercent: -100 * direction,
    autoAlpha: 0,
    duration: 0.8,
    ease: 'power3.inOut'
  })
  
  // Entrance animation
  gsap.fromTo(nextSlide, 
    { xPercent: 100 * direction, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.inOut' }
  )
})
</script>

<style scoped>
@media (min-width: 768px) {
  .slide-section {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
  }
  .slide-section:first-child {
    opacity: 1;
    visibility: visible;
  }
}
@media (max-width: 767px) {
  .mobile-block {
    position: relative !important;
    display: block !important;
    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
    height: auto !important;
    min-height: auto !important;
  }
}

.is-sliding .slide-section {
  will-change: auto !important;
}
</style>
