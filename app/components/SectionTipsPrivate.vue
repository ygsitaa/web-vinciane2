<template>
  <section id="jardin-secret" class="w-full h-full relative flex items-start justify-center snap-start snap-always overflow-hidden">

    <!-- Fixed background image covering the viewport -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${bg})` }"
      ></div>
      <div class="absolute inset-0 bg-cream/60"></div>
    </div>

    <!-- Scrollable content -->
    <div class="relative z-10 w-full h-full overflow-y-auto">
      <div class="w-full max-w-6xl mx-auto px-6 xl:px-12 pt-6 xl:pt-28 pb-20">
    
        <WelcomeSection>
          <div class="p-6 mb-8 text-center leading-relaxed text-mid text-sm md:text-base bg-white/85 border border-terracotta/20 rounded-3xl">
            <h2 class="text-3xl md:text-5xl font-heading font-bold mb-6" style="color: #3D2B1F;">
              Ton Jardin <span class="text-terracotta">Secret</span>
            </h2>
            <p class="mb-3">
              Si tu lis ces mots, c'est que mon livre a trouvé une place dans ton quotidien. <strong class="text-terracotta">Merci infiniment.</strong>
            </p>
            <p>
              J'avais envie de t'offrir un endroit où revenir quand tu en ressens le besoin. Installe-toi quelques minutes... Ce banc est réservé à toutes les mamans qui ont choisi de faire ce petit bout de chemin avec moi. ♡
            </p>
          </div>
          <!-- <h2 class="text-3xl md:text-5xl font-heading font-bold mb-6" style="color: #3D2B1F;">
            Ton Jardin <span class="text-terracotta">Secret</span>
          </h2>
          <p class="text-mid max-w-4xl mx-auto text-base md:text-lg mb-6">
            Si tu lis ces mots, c'est que mon livre a trouvé une place dans ton quotidien. <strong class="text-terracotta">Merci infiniment.</strong>
          </p>
          <p class="text-mid max-w-4xl mx-auto text-base md:text-lg">
            J'avais envie de t'offrir un endroit où revenir quand tu en ressens le besoin. Installe-toi quelques minutes... Ce banc est réservé à toutes les mamans qui ont choisi de faire ce petit bout de chemin avec moi. ♡
          </p> -->
        </WelcomeSection>

        <ResourcesCard title="Tes cadeaux exclusifs ♡" subtitle="Reviens quand tu veux. Ce jardin est un peu le tien maintenant.">
          <ResourceButton 
            title="Audios relaxation" 
            description="Écouter" 
            @click="isAudioModalOpen = true"
          >
            <template #icon>🎧</template>
          </ResourceButton>
          
          <ResourceButton 
            title="PDF bien-être" 
            description="Télécharger" 
            @click="isPdfModalOpen = true"
          >
            <template #icon>📜</template>
          </ResourceButton>

          <ResourceButton 
            title="Méditations guidées" 
            description="S'apaiser" 
            @click="isMeditationModalOpen = true"
          >
            <template #icon>🧘‍♀️</template>
          </ResourceButton>
        </ResourcesCard>

        <div class="text-center">
          <router-link to="/" class="text-mid hover:text-terracotta flex items-center gap-2 justify-center">
            <button type="submit" class="btn-primary mt-2">
              ← Retourner au site public
            </button>
          </router-link>
        </div>

      </div>
    </div>

    <AudioLibraryModal :isOpen="isAudioModalOpen" @close="isAudioModalOpen = false" />
    <PdfLibraryModal :isOpen="isPdfModalOpen" @close="isPdfModalOpen = false" />
    <MeditationLibraryModal :isOpen="isMeditationModalOpen" @close="isMeditationModalOpen = false" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WelcomeSection from './garden/WelcomeSection.vue'
import ResourcesCard from './garden/ResourcesCard.vue'
import ResourceButton from './garden/ResourceButton.vue'
import AudioLibraryModal from './garden/AudioLibraryModal.vue'
import PdfLibraryModal from './garden/PdfLibraryModal.vue'
import MeditationLibraryModal from './garden/MeditationLibraryModal.vue'
import { useAsset } from '~/composables/useAsset'

const isAudioModalOpen = ref(false)
const isPdfModalOpen = ref(false)
const isMeditationModalOpen = ref(false)

const bg = useAsset('/images/background_jardin.png')
</script>
