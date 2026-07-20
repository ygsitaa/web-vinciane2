<template>
  <div class="w-screen h-dvh bg-cream text-dark-text overflow-hidden">
    <template v-if="hasAccess">
      <NavBar />
      <SectionTipsPrivate />
    </template>

    <div v-else class="flex items-center justify-center h-full p-6">
      <div class="w-full max-w-md bg-white/85 border border-terracotta/20 rounded-3xl p-8 shadow-sm">
        <div class="text-center mb-6">
          <div class="text-4xl mb-3">🗝️</div>
          <h1 class="font-heading font-bold text-2xl text-dark-text mb-2">Le Portillon du Jardin</h1>
          <p class="text-mid text-sm">Ce jardin secret est réservé aux lectrices du livre.</p>
        </div>
        <GardenPasswordForm @success="onUnlock" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import GardenPasswordForm from '~/components/garden/GardenPasswordForm.vue'

const { hasAccess, checkStoredAccess } = useGardenAccess()

onMounted(() => {
  checkStoredAccess()
})

const onUnlock = () => {
  checkStoredAccess()
}
</script>
