<template>
  <div class="w-full">
    <audio ref="player" controls>
      <source :src="audioUrl" type="audio/mp3" />
    </audio>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps<{
  audioUrl: string
}>()

const player = ref<HTMLElement | null>(null)
let plyrInstance: any = null

onMounted(async () => {
  // Plyr accesses `document` at the module level, so it must be
  // imported dynamically on the client to avoid breaking Nuxt SSR.
  const [{ default: Plyr }] = await Promise.all([
    import('plyr'),
    import('plyr/dist/plyr.css')
  ])

  if (player.value) {
    plyrInstance = new Plyr(player.value, {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume']
    })
  }
})

watch(() => props.audioUrl, (newUrl) => {
  if (plyrInstance) {
    plyrInstance.source = {
      type: 'audio',
      sources: [
        {
          src: newUrl,
          type: 'audio/mp3',
        },
      ],
    }
  }
})

onBeforeUnmount(() => {
  if (plyrInstance) {
    plyrInstance.destroy()
  }
})
</script>

<style scoped>
:deep(.plyr--audio .plyr__controls) {
  background: transparent;
  color: #3D2B1F;
  padding: 0;
}
:deep(.plyr--audio .plyr__control:hover) {
  background: #E89664;
  color: white;
}
:deep(.plyr--full-ui input[type=range]) {
  color: #E89664;
}
</style>
