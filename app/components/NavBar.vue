<template>
  <header 
    class="hidden xl:flex fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 transition-all duration-300 py-4 px-6 2xl:px-12 justify-center items-center glass-panel rounded-full mt-4 mx-4"
    style="width: calc(75% - 2rem);"
  >
    <!-- <div class="flex items-center cursor-pointer" @click="goToHome">
      <span class="font-heading font-bold text-2xl tracking-wider text-dark-text">
        Vinciane <span class="text-terracotta">H.</span>
      </span>
    </div> -->

    <nav class="flex items-center gap-8">
      <button 
        @click="goToSection(0)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="!isSecretPage && slider.currentIndex.value === 0 ? 'text-terracotta' : 'text-mid'"
      >
        Accueil
      </button>
      <button 
        @click="goToSection(1)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="!isSecretPage && slider.currentIndex.value === 1 ? 'text-terracotta' : 'text-mid'"
      >
        Qui suis-je
      </button>
      <button 
        @click="goToSection(2)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="!isSecretPage && slider.currentIndex.value === 2 ? 'text-terracotta' : 'text-mid'"
      >
        Bibliothèque
      </button>
      <button 
        @click="goToSection(3)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="!isSecretPage && slider.currentIndex.value === 3 ? 'text-terracotta' : 'text-mid'"
      >
        Guide
      </button>
      <button 
        @click="goToSection(4)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="!isSecretPage && slider.currentIndex.value === 4 ? 'text-terracotta' : 'text-mid'"
      >
        Les Jardins
      </button>
      <button 
        @click="goToSection(5)" 
        class="text-sm font-medium tracking-wide uppercase transition-colors hover:text-terracotta cursor-pointer"
        :class="!isSecretPage && slider.currentIndex.value === 5 ? 'text-terracotta' : 'text-mid'"
      >
        Contact
      </button>
      <div class="relative" ref="linksMenuRef">
        <button 
          @click="isLinksMenuOpen = !isLinksMenuOpen" 
          class="text-sm font-semibold text-[#E0AB50] hover:text-dark-text transition-colors uppercase tracking-wider ml-2"
        >
          Liens Externes ↓
        </button>
        <div 
          v-if="isLinksMenuOpen" 
          class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
        >
          <a href="#" target="_blank" class="block px-4 py-2 text-sm font-semibold text-terracotta hover:bg-gray-100 transition-colors uppercase tracking-wider">
            Le coin des petites tornades ↗
          </a>
          <a href="#" target="_blank" class="block px-4 py-2 text-sm font-semibold text-terracotta hover:bg-gray-100 transition-colors uppercase tracking-wider">
            Blog ↗
          </a>
        </div>
      </div>
    </nav>
  </header>

  <button class="fixed top-4 right-4 z-50 xl:hidden flex items-center justify-center w-10 h-10 rounded-full bg-terracotta text-white shadow-xl shadow-terracotta/30 border border-white/30" @click="isMobileMenuOpen = true" aria-label="Ouvrir le menu mobile">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="7" x2="21" y2="7"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="17" x2="21" y2="17"></line>
    </svg>
  </button>

  <MobileNav 
    v-if="isMobileMenuOpen" 
    @close="isMobileMenuOpen = false" 
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const { isSecretPage, slider, goToSection, goToHome } = usePublicNavigation()
const isMobileMenuOpen = ref(false)
const isLinksMenuOpen = ref(false)
const linksMenuRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (linksMenuRef.value && !linksMenuRef.value.contains(event.target as Node)) {
    isLinksMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
