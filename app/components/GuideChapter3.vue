<template>
  <div class="chapter-content">
    <!-- Header -->
    <div class="chapter-header">
      <div class="chapter-icon-badge">🗺️</div>
      <div>
        <div class="section-badge text-xs mb-2">📘 Chapitre 3</div>
        <h3 class="chapter-title">Par où commencer&nbsp;?</h3>
      </div>
    </div>

    <p class="chapter-intro">
      Lorsque l'on commence à se poser des questions sur son enfant, on peut vite se sentir perdu entre les conseils de l'entourage, les informations trouvées sur Internet et les nombreux professionnels qui existent. Dans ce chapitre, je vous guide avec douceur.
    </p>

    <!-- Step 1 -->
    <div class="chapter-card border-terracotta/20 bg-white/70">
      <p class="chapter-card-label text-terracotta">La première étape&nbsp;: en parler</p>
      <p class="text-sm text-dark-text leading-relaxed mb-3">
        Avant même de penser aux bilans ou aux diagnostics, prenez le temps d'échanger avec les personnes qui connaissent bien votre enfant. Leurs observations peuvent compléter les vôtres et vous aider à mieux comprendre ce qu'il vit au quotidien.
      </p>
      <p class="text-sm text-mid mb-2">Vous pouvez, par exemple, en parler avec&nbsp;:</p>
      <ul class="chapter-list">
        <li><span class="bullet text-terracotta">•</span><span>son enseignant</span></li>
        <li><span class="bullet text-terracotta">•</span><span>son éducateur</span></li>
        <li><span class="bullet text-terracotta">•</span><span>les professionnels de la crèche</span></li>
        <li><span class="bullet text-terracotta">•</span><span>un membre de votre famille qui le voit régulièrement</span></li>
      </ul>
      <p class="text-sm text-mid mt-3 italic">Le but n'est pas de chercher une réponse immédiate, mais de recueillir différents regards sur votre enfant.</p>
    </div>

    <!-- Who to consult -->
    <div class="chapter-card border-terracotta/20 bg-white/70">
      <p class="chapter-card-label text-terracotta">Qui consulter en premier&nbsp;?</p>
      <p class="text-sm text-dark-text leading-relaxed">
        Dans la plupart des situations, le médecin traitant ou le pédiatre est un excellent point de départ. Il connaît l'histoire médicale de votre enfant et pourra prendre le temps d'écouter vos observations. Si cela est nécessaire, il pourra ensuite vous orienter vers le professionnel le plus adapté à votre situation.
      </p>
    </div>

    <!-- School -->
    <div class="chapter-card border-terracotta/20 bg-peach/20">
      <p class="chapter-card-label text-terracotta">N'oubliez pas que l'école peut aussi vous guider</p>
      <p class="text-sm text-dark-text leading-relaxed">
        Si vous vous posez des questions, n'hésitez pas à demander un rendez-vous avec l'enseignant de votre enfant. Ensemble, vous pourrez partager vos observations et réfléchir aux premières étapes. Si nécessaire, l'école pourra également vous orienter vers le PMS ou d'autres professionnels.
      </p>
    </div>

    <div class="chapter-card border-terracotta/20 bg-peach/20">
      <a :href="schemaUrl" target="_blank" class="cursor-pointer">
        <img :src="schemaUrl" alt="schéma explicatif des difficultés d'un enfant" class="w-full rounded-xl">
      </a>
    </div>

    <!-- Vinciane -->
    <div class="chapter-card border-rose/20 bg-peach/20">
      <p class="chapter-card-label text-terracotta">Le regard de Vinciane</p>
      <p class="text-sm text-dark-text leading-relaxed">
        Le plus difficile, ce n'était pas de voir que mes filles avaient des difficultés. Le plus difficile, c'était de ne pas savoir vers qui me tourner. J'avais l'impression d'être seule face à toutes mes questions. Si j'ai créé ce guide aujourd'hui, c'est pour que d'autres parents trouvent plus facilement le chemin que j'ai eu tant de mal à trouver.
      </p>
    </div>

    <!-- Avec douceur -->
    <div class="chapter-card border-terracotta/20 bg-lilac/20">
      <p class="chapter-card-label text-dark-text">Avec douceur</p>
      <p class="text-sm text-mid leading-relaxed">
        Vous n'êtes pas seul à avancer sur ce chemin. Chaque échange peut vous aider à y voir un peu plus clair.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsset } from '~/composables/useAsset'

const schemaUrl = useAsset('/images/schema.png')
</script>
