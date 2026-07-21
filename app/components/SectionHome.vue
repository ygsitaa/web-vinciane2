<template>
  <section id="home" class="w-full relative flex items-center justify-center snap-start snap-always overflow-hidden bg-cover" :style="{ backgroundImage: `url(${bg})` }">
    <!-- Decorative background -->
    <!-- <div class="absolute inset-0 z-0 bg-cream"></div> -->

    <!-- Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-0 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
      
      <!-- Left: Portrait -->
      <div class="shrink-0 flex flex-col items-center md:items-start gap-4">
        <div class="relative">
          <div class="absolute inset-0 rounded-full bg-terracotta/10"></div>
          <img 
            :src="authorPortrait"
            alt="Vinciane Hodiamont - Auteure" 
            class="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover object-top border-4 border-white"
          />
        </div>
      </div>

      <!-- Right: Text -->
      <div class="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4" style="color: #3D2B1F;">
          Tribu<span class="text-terracotta">Six</span>
        </h1>
        <p class="text-lg md:text-xl font-heading italic mb-6 text-mid">
          <span>🌻</span> Accompagner les parents et enfants extraordinaires avec douceur.
        </p>

        <div class="p-6 mb-8 text-left leading-relaxed text-mid text-sm md:text-base bg-white/95 border border-terracotta/20 rounded-3xl">
          <p class="mb-3">
            Autrice, maman de six enfants et créatrice de ressources pour les familles confrontées au TDAH, aux troubles des apprentissages et à l'épuisement parental.
          </p>
          <p>
            À travers sa collection <strong class="text-terracotta">TribuSix</strong>, elle offre aux enfants "tornades" et à leurs parents des outils concrets pour vivre ensemble avec plus de sérénité, de compréhension… et beaucoup d'amour.
          </p>
        </div>

        <div class="flex flex-wrap gap-3 justify-center md:justify-start">
          <button 
            @click="$emit('go-to-library')" 
            class="btn-primary"
          >
            📚 Découvrir les livres
          </button>
          <button 
            @click="$emit('go-to-contact')" 
            class="btn-secondary"
          >
            ✉️ Me contacter
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useAsset } from '~/composables/useAsset'

defineEmits(['go-to-library', 'go-to-contact'])

const bg = useAsset('/images/background_accueil3.jpg')
const authorPortrait = useAsset('/images/logo_tribusix.jpg')
</script>
