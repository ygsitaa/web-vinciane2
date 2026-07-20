<template>
  <GardenModal :modelValue="isOpen" @update:modelValue="$emit('close')" title="Histoires Audio">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="audio in audios" 
        :key="audio.id"
        class="bg-white rounded-2xl p-5 border border-terracotta/10 flex flex-col"
      >
        <div class="flex gap-4 mb-4">
          <div v-if="audio.coverImage" class="w-24 h-24 rounded-xl overflow-hidden shrink-0">
            <img :src="audio.coverImage" alt="cover" class="w-full h-full object-cover" />
          </div>
          <div>
            <h4 class="font-bold text-dark-text mb-1">{{ audio.title }}</h4>
            <p class="text-sm text-mid mb-2">{{ audio.description }}</p>
            <span class="text-xs font-semibold text-terracotta bg-terracotta/10 px-2 py-1 rounded-md">{{ audio.duration }}</span>
          </div>
        </div>
        <div class="mt-auto pt-4 border-t border-terracotta/10">
          <AudioPlayer :audioUrl="audio.audioUrl" />
          <div class="flex justify-end mt-3">
             <a :href="audio.audioUrl" download class="text-xs text-mid hover:text-terracotta underline flex items-center gap-1">
               <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
               Télécharger
             </a>
          </div>
        </div>
      </div>
    </div>
  </GardenModal>
</template>

<script setup lang="ts">
import { mockAudioStories } from '~/data/gardenMockData'
import GardenModal from './GardenModal.vue'
import AudioPlayer from './AudioPlayer.vue'

defineProps<{
  isOpen: boolean
}>()
defineEmits(['close'])

const audios = mockAudioStories
</script>
