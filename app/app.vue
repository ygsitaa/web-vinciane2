<template>
  <div 
    class="w-screen h-dvh bg-cream text-dark-text overflow-hidden"
    :class="{ 'is-sliding': slider.isAnimating.value }"
  >
    <NavBar />
    <SectionSlider />
    <BookPreviewModal />
  </div>
</template>

<script setup>
import { useSlider } from './composables/useSlider'
const slider = useSlider()
</script>
