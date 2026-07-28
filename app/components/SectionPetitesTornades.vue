<template>
  <section id="petites-tornades" class="relative w-full h-full flex flex-col items-center justify-start pt-24 md:pt-32 px-4 md:px-8 overflow-y-auto pb-24">
    <div class="max-w-6xl w-full mx-auto space-y-16">
      
      <!-- En-tête -->
      <div class="text-center space-y-4">
        <h2 class="font-heading text-4xl md:text-5xl lg:text-6xl text-terracotta font-bold tracking-wider">
          Le coin des Petites Tornades
        </h2>
        <p class="text-lg md:text-xl text-dark-text max-w-2xl mx-auto">
          Découvrez des ressources ludiques, éducatives et amusantes pour occuper et stimuler vos enfants.
        </p>
      </div>

      <!-- Bloc Astrocalcul -->
      <div class="glass-panel p-8 md:p-12 rounded-3xl flex flex-col lg:flex-row gap-12 items-center">
        <div class="flex-1 space-y-6">
          <h3 class="font-heading text-3xl text-terracotta font-bold">
            {{ astrocalculData.title }}
          </h3>
          <p class="text-dark-text text-lg leading-relaxed">
            {{ astrocalculData.description }}
          </p>
          <div class="flex flex-wrap gap-4 pt-4">
            <a :href="astrocalculData.appStoreLink" target="_blank" class="px-6 py-3 bg-dark-text text-white rounded-full font-semibold hover:bg-terracotta transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              App Store
            </a>
            <a :href="astrocalculData.playStoreLink" target="_blank" class="px-6 py-3 bg-dark-text text-white rounded-full font-semibold hover:bg-terracotta transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              Google Play
            </a>
            <a :href="astrocalculData.websiteLink" target="_blank" class="px-6 py-3 bg-dark-text text-white rounded-full font-semibold hover:bg-terracotta transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              Site internet
            </a>
          </div>
        </div>
        <div class="flex-1 relative w-full group">
          <!-- Boutons de navigation (Desktop) -->
          <button @click="scrollCarousel('left')" class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white text-terracotta shadow-lg items-center justify-center hover:bg-terracotta hover:text-white transition-colors opacity-0 group-hover:opacity-100 cursor-pointer" aria-label="Précédent">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <div 
            ref="carouselRef"
            @touchstart.stop 
            @touchend.stop
            class="w-full flex gap-2 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
          >
            <div v-for="img in astrocalculData.images" :key="img.id" class="snap-center shrink-0 w-64 h-auto aspect-[9/16] bg-cream rounded-2xl overflow-hidden shadow-lg border border-gold/20 flex items-center justify-center text-terracotta/50">
              <!-- Remplacer par l'image une fois dispo -->
              <!-- <span class="font-heading font-bold text-xl">{{ img.alt }}</span> -->
              <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover">
            </div>
          </div>
          
          <button @click="scrollCarousel('right')" class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white text-terracotta shadow-lg items-center justify-center hover:bg-terracotta hover:text-white transition-colors opacity-0 group-hover:opacity-100 cursor-pointer" aria-label="Suivant">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <!-- Bloc Coloriages -->
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="font-heading text-3xl text-terracotta font-bold">Coloriages à télécharger</h3>
          <p class="text-dark-text mt-2">Des heures de dessins cosmiques à imprimer gratuitement !</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="col in coloriagesData" :key="col.id" class="glass-panel p-6 rounded-2xl flex flex-col items-center gap-4 group">
            <div class="w-full aspect-square bg-cream rounded-xl border border-gold/20 flex items-center justify-center overflow-hidden">
              <span class="text-terracotta/50 font-heading font-bold">Aperçu {{ col.title }}</span>
            </div>
            <h4 class="font-bold text-dark-text text-lg text-center">{{ col.title }}</h4>
            <a :href="col.downloadLink" download class="w-full py-3 mt-auto bg-cream border-2 border-terracotta text-terracotta rounded-full font-semibold hover:bg-terracotta hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Télécharger
            </a>
          </div>
        </div>
      </div>

      <!-- Bloc PDF / Ressources -->
      <div class="space-y-8 pb-12">
        <div class="text-center">
          <h3 class="font-heading text-3xl text-terracotta font-bold">Ressources supplémentaires</h3>
          <p class="text-dark-text mt-2">Des fiches d'activités et d'apprentissage.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="pdf in pdfData" :key="pdf.id" class="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-center hover:scale-[1.02] transition-transform">
            <div class="w-16 h-16 shrink-0 bg-terracotta/10 text-terracotta rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex-1 text-center sm:text-left">
              <h4 class="font-bold text-dark-text text-lg">{{ pdf.title }}</h4>
              <p class="text-dark-text/70 text-sm mt-1 mb-3">{{ pdf.description }}</p>
              <span class="text-xs font-semibold px-2 py-1 bg-white/50 rounded-md text-terracotta">
                {{ pdf.format }} • {{ pdf.size }}
              </span>
            </div>
            <a :href="pdf.fileUrl" download class="shrink-0 w-12 h-12 rounded-full bg-cream border border-terracotta/30 flex items-center justify-center text-terracotta hover:bg-terracotta hover:text-white transition-colors" aria-label="Télécharger le fichier">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { astrocalculData, coloriagesData, pdfData } from '../data/petitesTornadesData'

const carouselRef = ref<HTMLElement | null>(null)

const scrollCarousel = (direction: 'left' | 'right') => {
  if (carouselRef.value) {
    const scrollAmount = 264 // Approx image width + gap
    carouselRef.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
