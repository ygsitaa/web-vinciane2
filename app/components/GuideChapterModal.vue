<template>
  <Teleport to="body">
    <div v-if="chapter" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-box" role="dialog" :aria-label="`Chapitre ${chapter.number} : ${chapter.title}`">
        <button
          @click="emit('close')"
          class="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-mid hover:text-terracotta hover:bg-peach/40 transition-colors z-10"
          aria-label="Fermer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex items-start gap-4 mb-6">
          <div class="w-14 h-14 rounded-2xl bg-peach/70 flex items-center justify-center text-3xl shadow-sm shrink-0">
            {{ chapter.icon }}
          </div>
          <div>
            <div class="section-badge text-xs mb-2">📘 Chapitre {{ chapter.number }}</div>
            <h3 class="font-heading font-bold text-2xl text-dark-text leading-tight">{{ chapter.title }}</h3>
          </div>
        </div>

        <p class="text-sm leading-relaxed text-mid mb-5">{{ chapter.intro }}</p>

        <div class="space-y-4">
          <div class="rounded-2xl border border-terracotta/20 bg-white/70 p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-terracotta mb-2">Questions à se poser</p>
            <ul class="space-y-2 text-sm text-dark-text">
              <li v-for="question in chapter.questions" :key="question" class="flex gap-2">
                <span class="text-terracotta">•</span>
                <span>{{ question }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-terracotta/20 bg-cream p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-terracotta mb-2">À retenir</p>
            <ul class="space-y-2 text-sm text-dark-text">
              <li v-for="item in chapter.advice" :key="item" class="flex gap-2">
                <span class="text-terracotta">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="rounded-2xl p-4 border border-terracotta/20 bg-peach/30">
              <p class="font-heading font-bold text-lg text-dark-text mb-1">Signe à observer</p>
              <p class="text-sm text-mid">Regarder les habitudes, les répétitions et les situations qui semblent fatiguer ou mettre à l’épreuve l’enfant.</p>
            </div>
            <div class="rounded-2xl p-4 border border-terracotta/20 bg-lilac/30">
              <p class="font-heading font-bold text-lg text-dark-text mb-1">Bonne posture</p>
              <p class="text-sm text-mid">L’observation, l’écoute et la régularité sont plus efficaces que la pression ou la comparaison.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface GuideChapter {
  number: number
  icon: string
  title: string
  intro: string
  questions: string[]
  advice: string[]
}

const props = defineProps<{ chapter: GuideChapter | null }>()
const emit = defineEmits<{ (e: 'close'): void }>()
</script>
