<template>
  <section id="jardin" class="w-full h-full relative flex items-start justify-center snap-start snap-always overflow-hidden">

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
              Le Jardin des <span class="text-terracotta">Mamans Fatiguées</span>
            </h2>
            <p class="mb-3">
              Un endroit où les mamans peuvent souffler, reprendre des forces et se rappeler qu'elles font déjà de leur mieux. 
              Merci d'avoir choisi de lire <em>Mon petit livre pour les mamans fatiguées</em>. J'espère qu'au fil des pages, tu t'es sentie comprise, écoutée d'une certaine manière, en déposant tes émotions… et peut-être un peu moins seule.
            </p>
            <p>
              Si ce livre t'a apporté un peu de douceur, alors il a rempli sa mission. Aujourd'hui, j'aimerais simplement te dire… 
              <strong class="text-terracotta">Merci d'être là.</strong> Installe-toi quelques minutes. Respire. Tu es la bienvenue.
            </p>
          </div>
        </WelcomeSection>

        <ResourcesCard title="Profite de ces petites douceurs gratuites" subtitle="Des ressources conçues pour t'accompagner au quotidien.">
          <ResourceButton 
            title="Audio à écouter" 
            description="Écouter" 
            @click="isAudioModalOpen = true"
          >
            <template #icon>🎧</template>
          </ResourceButton>
          
          <ResourceButton 
            title="PDF à télécharger" 
            description="Télécharger" 
            @click="isPdfModalOpen = true"
          >
            <template #icon>📄</template>
          </ResourceButton>
        </ResourcesCard>

        <div class="text-center max-w-3xl mx-auto px-6">
          <div class="bg-linear-to-br from-green-50 to-cream p-8 rounded-3xl border border-green-800/10 shadow-sm relative overflow-hidden bg-cover"  :style="{ backgroundImage: `url(${bg2})`, backgroundBlendMode: 'lighten', backgroundColor: 'rgba(255, 255, 255, 0.8)'}">
            <div class="absolute -top-10 -right-10 text-9xl opacity-5">🌿</div>
            <h3 class="font-heading font-bold text-2xl text-dark-text mb-4">Le Portillon du Jardin</h3>
            <p class="text-mid mb-6">
               Merci d'être là.
               Parce que tu as acheté ce livre et que tu m'as accordé ta confiance, j'ai eu envie de t'offrir un petit cadeau.
               Il ne changera peut-être pas le monde, mais j'espère qu'il illuminera un peu ta journée, qu'il t'offrira quelques minutes rien qu'à toi et qu'il te rappellera que, toi aussi, tu mérites de prendre soin de toi.
               Clique simplement sur le bouton ci-dessous pour découvrir ton cadeau.
            </p>
            <button @click="isPasswordModalOpen = true" class="btn-primary inline-flex items-center gap-2">
              <span>🗝️</span> Découvrir mon cadeau
            </button>
          </div>
        </div>

      </div>
    </div>

    <AudioLibraryModal :isOpen="isAudioModalOpen" @close="isAudioModalOpen = false" />
    <PdfLibraryModal :isOpen="isPdfModalOpen" @close="isPdfModalOpen = false" />
    <GardenPasswordModal v-model="isPasswordModalOpen" @success="goToPrivateGarden" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import WelcomeSection from './garden/WelcomeSection.vue'
import ResourcesCard from './garden/ResourcesCard.vue'
import ResourceButton from './garden/ResourceButton.vue'
import AudioLibraryModal from './garden/AudioLibraryModal.vue'
import PdfLibraryModal from './garden/PdfLibraryModal.vue'
import GardenPasswordModal from './garden/GardenPasswordModal.vue'
import { useAsset } from '~/composables/useAsset'

const router = useRouter()
const isAudioModalOpen = ref(false)
const isPdfModalOpen = ref(false)
const isPasswordModalOpen = ref(false)

const goToPrivateGarden = () => {
  router.push('/jardin-secret')
}

const bg = useAsset('/images/background_jardin_grand.jpg')
const bg2 = useAsset('/images/background_portillon.jpg')
</script>
