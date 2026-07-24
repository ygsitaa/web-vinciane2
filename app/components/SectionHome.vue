<template>
  <section id="home" class="w-full relative flex items-start md:items-center justify-center snap-start snap-always bg-cover overflow-visible md:overflow-hidden min-h-screen md:min-h-[100dvh]">
    <!-- Decorative background -->
    <div class="absolute inset-0 z-0 bg-cream bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${bg})` }"></div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      
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
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4" style="color: #3D2B1F;">
          Tribu<span class="text-terracotta">Six</span>
        </h1>
        <p class="text-base md:text-lg font-heading italic mb-6 text-mid">
          <span>🌻</span> Accompagner les parents et enfants extraordinaires avec douceur.
        </p>

        <div class="p-6 mb-8 text-left leading-relaxed text-mid text-sm md:text-base bg-white/95 border border-terracotta/20 rounded-3xl">
          <p class="mb-3">
            Ici, vous trouverez un espace pensé pour les familles qui cherchent à mieux comprendre, accompagner et soutenir leurs enfants, avec bienveillance, sans jugement et sans culpabilité.
            Chaque enfant est unique. Chaque parent avance avec son histoire, ses doutes, ses espoirs et ses découvertes. Parce qu'il n'existe pas de mode d'emploi pour être parent, j'ai imaginé un lieu où chacun peut trouver des ressources, des repères, des mots qui rassurent et des instants pour souffler.
            Au fil des pages, vous découvrirez des livres, des guides, des outils, des espaces dédiés aux parents et aux enfants, ainsi que des ressources pour vous accompagner, pas à pas, sur votre propre chemin.
            Prenez le temps de vous installer. Vous êtes ici chez vous.
            Parce qu'il n'existe pas un seul chemin pour grandir, apprendre ou être parent.
          </p>
        </div>

        <div class="flex flex-wrap gap-3 justify-center md:justify-start pb-6 md:pb-0">
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
