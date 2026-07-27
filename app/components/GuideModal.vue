<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="visible"
        class="modal-overlay"
        role="dialog"
        :aria-label="ariaLabel"
        aria-modal="true"
        @click.self="emit('close')"
      >
        <div ref="boxRef" class="modal-box" tabindex="-1" @keydown.esc="emit('close')">
          <!-- Close button -->
          <button
            @click="emit('close')"
            class="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-mid hover:text-terracotta hover:bg-peach/40 transition-colors z-10"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Dynamic chapter content -->
          <component :is="chapterComponent" v-if="chapterComponent" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref, watch, nextTick } from 'vue'

const props = defineProps<{
  visible: boolean
  componentName: string | null
  ariaLabel?: string
}>()

const emit = defineEmits<{ (e: 'close'): void }>()

const boxRef = ref<HTMLElement | null>(null)

// Explicit static map so Vite can analyse imports at build time
const componentMap: Record<string, ReturnType<typeof defineAsyncComponent>> = {
  GuideChapter1: defineAsyncComponent(() => import('./GuideChapter1.vue')),
  GuideChapter2: defineAsyncComponent(() => import('./GuideChapter2.vue')),
  GuideChapter3: defineAsyncComponent(() => import('./GuideChapter3.vue')),
  GuideChapter4: defineAsyncComponent(() => import('./GuideChapter4.vue')),
  GuideChapter5: defineAsyncComponent(() => import('./GuideChapter5.vue')),
  GuideChapter6: defineAsyncComponent(() => import('./GuideChapter6.vue')),
}

const chapterComponent = computed(() =>
  props.componentName ? componentMap[props.componentName] ?? null : null
)

// Focus the modal box when it becomes visible for accessibility
watch(
  () => props.visible,
  async (isVisible) => {
    if (isVisible) {
      await nextTick()
      boxRef.value?.focus()
    }
  }
)

// Close on Escape key at document level
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.visible) emit('close')
}
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', onKeydown)
}
</script>
