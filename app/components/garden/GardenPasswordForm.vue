<template>
  <form @submit.prevent="submit" class="flex flex-col gap-4">
    <p class="text-mid text-sm md:text-base leading-relaxed">
      Entrez le mot de passe indiqué dans votre livre pour accéder à votre cadeau.
    </p>

    <input
      v-model="password"
      type="password"
      autocomplete="current-password"
      placeholder="Mot de passe"
      required
      class="glass-input px-4 py-3 rounded-xl text-sm w-full"
    />

    <p v-if="errorMessage" class="text-sm text-red-600">
      {{ errorMessage }}
    </p>

    <button type="submit" class="btn-primary inline-flex items-center justify-center gap-2">
      <span>🗝️</span> Entrer dans le jardin
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  success: []
}>()

const { tryUnlock } = useGardenAccess()

const password = ref('')
const errorMessage = ref('')

const submit = () => {
  errorMessage.value = ''

  if (tryUnlock(password.value)) {
    emit('success')
    password.value = ''
    return
  }

  errorMessage.value = 'Mot de passe incorrect. Vérifiez celui indiqué dans votre livre.'
}
</script>
