<template>
  <header 
    class="hidden 2xl:flex fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 transition-all duration-300 py-4 px-6 2xl:px-12 justify-between items-center glass-panel rounded-full mt-4 mx-4"
    style="width: calc(75% - 2rem);"
  >
    <div class="flex items-center cursor-pointer" @click="slider.goTo(0)">
      <span class="font-heading font-bold text-2xl tracking-wider text-dark-text">
        Vinciane <span class="text-terracotta">H.</span>
      </span>
    </div>

    <nav class="flex items-center gap-8">
      <button 
        @click="slider.goTo(0)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="slider.currentIndex.value === 0 ? 'text-terracotta' : 'text-mid'"
      >
        Accueil
      </button>
      <button 
        @click="slider.goTo(1)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="slider.currentIndex.value === 1 ? 'text-terracotta' : 'text-mid'"
      >
        Bibliothèque Tribusix
      </button>
      <button 
        @click="slider.goTo(2)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="slider.currentIndex.value === 2 ? 'text-terracotta' : 'text-mid'"
      >
        Jardin Des Mamans Fatiguées
      </button>
      <button 
        @click="slider.goTo(3)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="slider.currentIndex.value === 3 ? 'text-terracotta' : 'text-mid'"
      >
        Contact
      </button>
      <a href="#" target="_blank" class="text-sm font-semibold text-terracotta hover:text-dark-text transition-colors uppercase tracking-wider ml-2">
        Le coin des petites tornades ↗
      </a>
      <a href="#" target="_blank" class="text-sm font-semibold text-terracotta hover:text-dark-text transition-colors uppercase tracking-wider">
        Blog ↗
      </a>
    </nav>
  </header>

  <button class="fixed top-4 right-4 z-50 2xl:hidden flex items-center justify-center w-14 h-14 rounded-full bg-terracotta text-white shadow-xl shadow-terracotta/30 border border-white/30" @click="isMobileMenuOpen = true" aria-label="Ouvrir le menu mobile">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="7" x2="21" y2="7"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="17" x2="21" y2="17"></line>
    </svg>
  </button>

  <MobileNav 
    v-if="isMobileMenuOpen" 
    @close="isMobileMenuOpen = false" 
    :slider="slider" 
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSlider } from '../composables/useSlider'

const slider = useSlider()
const isMobileMenuOpen = ref(false)
</script>
