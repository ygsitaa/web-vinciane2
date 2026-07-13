<template>
  <Teleport to="body">
    <div v-if="book" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-box" role="dialog" :aria-label="`Aperçu : ${book.title}`">
        <button
          @click="emit('close')"
          class="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-mid hover:text-terracotta hover:bg-peach/40 transition-colors z-10"
          aria-label="Fermer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex items-start gap-5 mb-6">
          <img :src="book.frontCover" :alt="book.title" class="w-20 rounded-lg shadow-md shrink-0 object-cover" style="aspect-ratio: 2/3;" />
          <div>
            <div class="section-badge text-xs mb-2">📖 Aperçu</div>
            <h3 class="font-heading font-bold text-xl text-dark-text leading-tight">{{ book.title }}</h3>
            <p class="text-xs text-mid italic mt-1">{{ book.subtitle }}</p>
          </div>
        </div>

        <div class="space-y-5">
          <div
            v-for="(page, i) in book.previewPages"
            :key="i"
            class="p-5 rounded-2xl border"
            :style="`background: ${page.bg}; border-color: rgba(232, 150, 100, 0.2);`"
          >
            <p class="text-xs font-bold uppercase tracking-wider text-terracotta mb-2">Page {{ i + 1 }}</p>
            <p class="text-dark-text text-sm leading-relaxed italic">{{ page.text }}</p>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-peach/40 flex flex-wrap gap-3">
          <a :href="book.amazonLink" target="_blank" class="btn-primary text-xs">Commander sur Amazon</a>
          <a :href="book.stripeLink" target="_blank" class="btn-secondary text-xs">Commander en ligne</a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface PreviewPage {
  bg: string
  text: string
}

interface BookPreview {
  title: string
  subtitle: string
  frontCover: string
  previewPages: PreviewPage[]
  amazonLink: string
  stripeLink: string
}

const props = defineProps<{ book: BookPreview | null }>()
const emit = defineEmits<{ (e: 'close'): void }>()
</script>
