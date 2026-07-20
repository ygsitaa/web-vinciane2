<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" @click="close">
        <div class="absolute inset-0 bg-dark-text/40 backdrop-blur-sm"></div>
        <div 
          class="relative bg-cream w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-xl overflow-hidden flex flex-col"
          @click.stop
        >
          <div class="p-6 border-b border-terracotta/10 flex justify-between items-center bg-white/50">
            <h2 class="font-heading font-bold text-2xl text-dark-text">{{ title }}</h2>
            <button @click="close" class="w-10 h-10 rounded-full flex items-center justify-center bg-terracotta/10 text-terracotta hover:bg-terracotta hover:text-white transition-colors">
              ✕
            </button>
          </div>
          <div class="p-6 overflow-y-auto flex-1">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
  title: string
}>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
