<template>
  <GardenModal
    :model-value="modelValue"
    title="Le Portillon du Jardin"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <GardenPasswordForm @success="onSuccess" />
  </GardenModal>
</template>

<script setup lang="ts">
import GardenModal from './GardenModal.vue'
import GardenPasswordForm from './GardenPasswordForm.vue'

defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  success: []
}>()

const onSuccess = () => {
  emit('update:modelValue', false)
  emit('success')
}
</script>
