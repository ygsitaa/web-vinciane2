<template>
  <section id="qui-suis-je" class="w-full relative flex items-center justify-center snap-start snap-always overflow-hidden">
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute inset-0 bg-cream"></div>
      <div class="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-25" style="background: radial-gradient(circle, #F3BC62, transparent 70%);"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20" style="background: radial-gradient(circle, #E3BCB5, transparent 70%);"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-0 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
      <div class="shrink-0 flex flex-col items-center md:items-start gap-4">
        <div class="relative">
          <div class="absolute inset-0 rounded-full bg-terracotta/10 scale-110"></div>
          <img
            v-if="photoSrc"
            :src="photoSrc"
            :alt="author.photo.alt"
            class="relative w-52 h-52 md:w-72 md:h-72 rounded-full object-cover object-top border-4 border-white shadow-lg"
          />
          <div
            v-else
            class="relative w-52 h-52 md:w-72 md:h-72 rounded-full border-4 border-white shadow-lg bg-linear-to-br from-peach to-lilac flex flex-col items-center justify-center text-center px-6"
            aria-hidden="true"
          >
            <span class="text-5xl md:text-6xl mb-2">📷</span>
            <span class="text-sm text-mid font-medium">Photo à venir</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
        <p class="text-sm uppercase tracking-widest text-terracotta font-semibold mb-2">
          {{ author.title }}
        </p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-3" style="color: #3D2B1F;">
          {{ author.name }}
        </h2>
        <p class="text-lg md:text-xl font-heading italic mb-8 text-mid">
          {{ author.subtitle }}
        </p>

        <div class="soft-panel p-6 md:p-8 text-left leading-relaxed text-mid text-sm md:text-base rounded-3xl w-full">
          <p
            v-for="(paragraph, index) in author.paragraphs"
            :key="index"
            :class="{ 'mb-4': index < author.paragraphs.length - 1 }"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { AuthorProfile } from '~/data/authorMockData'
import { mockAuthorProfile } from '~/data/authorMockData'
import { useAsset } from '~/composables/useAsset'

const props = withDefaults(defineProps<{
  author?: AuthorProfile
}>(), {
  author: () => mockAuthorProfile,
})

const photoSrc = computed(() => {
  const url = props.author.photo.url
  return url ? useAsset(url) : ''
})
</script>
