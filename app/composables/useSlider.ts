import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const isAnimating = ref(false)
const direction = ref(1) // 1 for forward, -1 for backward

export const useSlider = () => {
  const totalSlides = 6

  const goTo = (index: number) => {
    if (isAnimating.value || index === currentIndex.value) return
    
    // Determine shortest path in circular slider
    let diff = index - currentIndex.value
    if (diff > totalSlides / 2) diff -= totalSlides
    if (diff < -totalSlides / 2) diff += totalSlides
    
    direction.value = diff > 0 ? 1 : -1
    isAnimating.value = true
    currentIndex.value = index
    
    setTimeout(() => {
      isAnimating.value = false
    }, 700) // matches GSAP duration roughly
  }

  const next = () => {
    const nextIndex = (currentIndex.value + 1) % totalSlides
    goTo(nextIndex)
  }

  const prev = () => {
    const prevIndex = (currentIndex.value - 1 + totalSlides) % totalSlides
    goTo(prevIndex)
  }

  // Keyboard navigation
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') next()
    else if (e.key === 'ArrowLeft') prev()
  }

  // Touch swipe
  let touchStartX = 0
  let touchEndX = 0
  
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX
  }
  
  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  }
  
  const handleSwipe = () => {
    // Only swipe on desktop/tablet, mobile is vertical scroll
    if (window.innerWidth < 768) return
    
    const diff = touchStartX - touchEndX
    if (Math.abs(diff) > 50) { // minimum threshold
      if (diff > 0) next()
      else prev()
    }
  }

  onMounted(() => {
    // Avoid multiple listeners if useSlider is called in multiple components
    // We only attach it if it's the main slider calling it
    // Actually, Vue handles event listeners cleanly if we just manage it properly
  })

  onUnmounted(() => {
  })

  const initListeners = () => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
  
  const destroyListeners = () => {
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchend', handleTouchEnd)
  }

  return {
    currentIndex,
    isAnimating,
    direction,
    goTo,
    next,
    prev,
    initListeners,
    destroyListeners
  }
}
