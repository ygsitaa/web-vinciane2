<template>
  <section id="guide" class="w-full relative flex items-start justify-center snap-start snap-always overflow-hidden">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-72 h-72 rounded-full opacity-20" style="background: radial-gradient(circle, #FBD4AD, transparent 70%);"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15" style="background: radial-gradient(circle, #E3BCB5, transparent 70%);"></div>
    </div>

    <div class="relative z-10 w-full h-full overflow-y-auto bg-cover"  :style="{ backgroundImage: `url(${bg})` }">
      <div class="w-full max-w-6xl mx-auto px-6 md:px-12 pt-6 xl:pt-28 pb-12">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-5xl font-heading font-bold mb-3" style="color: #3D2B1F;">
            Le Guide des <span class="text-terracotta">Parents</span>
          </h2>
          <p class="text-black md:text-mid text-shadow-lg text-shadow-white max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Vous n'êtes pas seuls. Avançons ensemble, une étape après l'autre.
          </p><br/>
          <p class="text-black md:text-mid text-shadow-lg text-shadow-white max-w-3xl mx-auto text-base md:text-base leading-relaxed">
            Lorsque l'on commence à se poser des questions sur son enfant, on peut vite se sentir perdu. Ce guide a été imaginé pour vous aider à mieux comprendre les différentes étapes, découvrir les professionnels qui peuvent vous accompagner et trouver des ressources utiles tout au long de votre parcours.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <button
            v-for="chapter in guideChapters"
            :key="chapter.number"
            type="button"
            class="tip-card text-left h-full cursor-pointer"
            @click="openChapter(chapter)"
          >
            <div class="flex items-center justify-between gap-3 mb-4">
              <div class="w-12 h-12 rounded-2xl bg-peach/60 flex items-center justify-center text-2xl shadow-sm">
                {{ chapter.icon }}
              </div>
              <span class="section-badge mb-0">Chapitre {{ chapter.number }}</span>
            </div>

            <h3 class="font-heading font-bold text-xl text-dark-text mb-2 leading-tight">
              {{ chapter.title }}
            </h3>

            <p class="text-sm text-mid leading-relaxed mb-4">
              {{ chapter.summary }}
            </p>

            <div class="flex items-center justify-between text-sm font-semibold text-terracotta">
              <span>Ouvrir le chapitre</span>
              <span aria-hidden="true">→</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <GuideModal
      :visible="modalVisible"
      :component-name="selectedComponentName"
      :aria-label="selectedAriaLabel"
      @close="closeChapter"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAsset } from '~/composables/useAsset'
import GuideModal from './GuideModal.vue'
import { guideChapters, type GuideChapterMeta } from '~/data/guideChapters'

const bg = useAsset('/images/background_guide.jpg')

const selectedChapter = ref<GuideChapterMeta | null>(null)

const modalVisible = computed(() => selectedChapter.value !== null)
const selectedComponentName = computed(() => selectedChapter.value?.componentName ?? null)
const selectedAriaLabel = computed(() =>
  selectedChapter.value
    ? `Chapitre ${selectedChapter.value.number}\u00a0: ${selectedChapter.value.title}`
    : ''
)

const openChapter = (chapter: GuideChapterMeta) => {
  selectedChapter.value = chapter
}

const closeChapter = () => {
  selectedChapter.value = null
}
</script>
