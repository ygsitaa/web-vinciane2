<template>
  <div class="fixed inset-0 z-60 glass-panel rounded-none flex flex-col justify-center items-center">
    <button class="absolute top-6 right-6 text-white p-2" @click="$emit('close')">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    
    <nav class="flex flex-col items-center gap-8">
      <button 
        @click="navTo(0)" 
        class="text-2xl font-heading tracking-widest transition-colors"
        :class="slider.currentIndex.value === 0 ? 'text-terracotta' : 'text-dark-text'"
      >
        Accueil
      </button>
      <button 
        @click="navTo(1)" 
        class="text-2xl font-heading tracking-widest transition-colors"
        :class="slider.currentIndex.value === 1 ? 'text-terracotta' : 'text-dark-text'"
      >
        Bibliothèque Tribusix
      </button>
      <button 
        @click="navTo(2)" 
        class="text-2xl font-heading tracking-widest transition-colors"
        :class="slider.currentIndex.value === 2 ? 'text-terracotta' : 'text-dark-text'"
      >
        Jardin Des Mamans Fatiguées
      </button>
      <button 
        @click="navTo(3)" 
        class="text-2xl font-heading tracking-widest transition-colors"
        :class="slider.currentIndex.value === 3 ? 'text-terracotta' : 'text-dark-text'"
      >
        Contact
      </button>

      <a href="#" target="_blank" class="mt-4 text-lg font-semibold text-terracotta">Le coin des petites tornades ↗</a>
      <a href="#" target="_blank" class="text-lg font-semibold text-terracotta">Blog ↗</a>
    </nav>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  slider: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const navTo = (index: number) => {
  props.slider.goTo(index)
  // On mobile we don't slide horizontally, so we might need to scroll vertically
  // Nuxt/Vue can handle scroll to element if we give them ids, 
  // but for now just close menu and let the native scroll or layout handle it
  emit('close')
  
  if (window.innerWidth < 768) {
    const sections = ['#home', '#bibliotheque', '#jardin', '#contact']
    const selector = sections[index]
    if (selector) {
      const el = document.querySelector(selector)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
