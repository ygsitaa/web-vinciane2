<template>
  <button 
    @click="$emit('click')"
    class="flex flex-col items-center p-6 w-full max-w-[200px] bg-cream/50 rounded-2xl border border-transparent hover:border-terracotta/30 hover:bg-white transition-all group"
  >
    <div class="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
      <slot name="icon"></slot>
    </div>
    <h4 class="font-heading font-bold text-dark-text mb-2">{{ title }}</h4>
    <p class="text-xs text-mid text-center">{{ description }}</p>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
defineEmits(['click'])
</script>
