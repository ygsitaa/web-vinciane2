<template>
  <GardenModal :modelValue="isOpen" @update:modelValue="$emit('close')" title="Ressources PDF">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="pdf in pdfs" 
        :key="pdf.id"
        class="bg-white rounded-2xl p-6 border border-terracotta/10 flex flex-col text-center items-center hover:shadow-md transition-shadow"
      >
        <div class="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4 text-3xl">
          📄
        </div>
        <h4 class="font-bold text-dark-text mb-2">{{ pdf.title }}</h4>
        <p class="text-sm text-mid mb-6 flex-1">{{ pdf.description }}</p>
        <a 
          :href="pdf.fileUrl" 
          download 
          class="w-full py-2 bg-terracotta/10 text-terracotta font-semibold rounded-xl hover:bg-terracotta hover:text-white transition-colors"
        >
          Télécharger
        </a>
      </div>
    </div>
  </GardenModal>
</template>

<script setup lang="ts">
import { mockPdfResources } from '~/data/gardenMockData'
import GardenModal from './GardenModal.vue'

defineProps<{
  isOpen: boolean
}>()
defineEmits(['close'])

const pdfs = mockPdfResources
</script>
