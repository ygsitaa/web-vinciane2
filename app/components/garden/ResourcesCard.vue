<template>
  <div class="max-w-5xl mx-auto px-6 pb-20 relative">
    <!-- <div class="absolute inset-0 bg-green-200/20 rounded-3xl -z-10 transform -rotate-1"></div> -->
    <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm border border-green-800/10">
      <div class="text-center mb-10">
        <h3 class="font-heading text-2xl text-dark-text mb-2">{{ title }}</h3>
        <p class="text-mid text-sm">{{ subtitle }}</p>
      </div>
      <div class="flex flex-wrap justify-center gap-6">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
