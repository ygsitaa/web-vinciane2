<template>
  <div class="w-full relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="absolute inset-0 bg-cream/40"></div>
    <div class="relative z-10 text-center px-6 mt-12">
      <div class="font-heading italic text-xl md:text-2xl text-terracotta mb-2">Bienvenue dans</div>
      <h1 class="font-heading font-bold text-5xl md:text-7xl text-dark-text mb-4" v-html="title"></h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string
  title: string
}>()
</script>
