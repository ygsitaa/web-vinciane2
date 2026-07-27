<template>
  <div class="chapter-content">
    <!-- Header -->
    <div class="chapter-header">
      <div class="chapter-icon-badge">🔍</div>
      <div>
        <div class="section-badge text-xs mb-2">📘 Chapitre 2</div>
        <h3 class="chapter-title">Les premiers signes qui peuvent interpeller</h3>
      </div>
    </div>

    <p class="chapter-intro">
      Chaque enfant est unique. Un ou plusieurs de ces signes ne signifient pas forcément qu'il existe un trouble. C'est l'ensemble de ce que vous observez, au fil du temps, qui peut vous aider à mieux comprendre votre enfant.
    </p>

    <!-- Signs grid -->
    <div class="space-y-3">
      <div v-for="section in signSections" :key="section.title" class="chapter-card border-terracotta/20 bg-white/70">
        <p class="chapter-card-label text-terracotta">{{ section.title }}</p>
        <ul class="chapter-list">
          <li v-for="item in section.items" :key="item">
            <span class="bullet text-terracotta">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Vinciane -->
    <div class="chapter-card border-rose/20 bg-peach/20">
      <p class="chapter-card-label text-terracotta">Le regard de Vinciane</p>
      <p class="text-sm text-dark-text leading-relaxed">
        Pendant longtemps, je cherchais une explication à chaque difficulté. Puis j'ai compris qu'il fallait simplement observer l'ensemble. Petit à petit, les pièces du puzzle ont commencé à s'assembler.
      </p>
    </div>

    <!-- Avec douceur -->
    <div class="chapter-card border-terracotta/20 bg-lilac/20">
      <p class="chapter-card-label text-dark-text">Avec douceur</p>
      <p class="text-sm text-mid leading-relaxed">
        Un signe isolé n'est pas forcément inquiétant. C'est l'ensemble de ce que vous observez, au fil du temps, qui peut vous aider à mieux comprendre votre enfant.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const signSections = [
  {
    title: 'Les apprentissages',
    items: [
      'Difficultés à apprendre à lire, écrire ou compter.',
      'Confusions fréquentes entre les lettres ou les chiffres.',
      'Beaucoup d\'efforts pour des résultats qui restent limités.',
      'Oublis fréquents malgré les répétitions.',
    ],
  },
  {
    title: 'L\'attention et l\'organisation',
    items: [
      'Difficulté à rester concentré.',
      'Passe rapidement d\'une activité à une autre.',
      'Perd régulièrement ses affaires.',
      'Oublie les consignes ou les étapes d\'une tâche.',
    ],
  },
  {
    title: 'Les émotions',
    items: [
      'Crises de colère très intenses.',
      'Frustration difficile à gérer.',
      'Hypersensibilité.',
      'Grande anxiété ou inquiétudes fréquentes.',
    ],
  },
  {
    title: 'Le sommeil',
    items: [
      'Difficulté à s\'endormir.',
      'Réveils fréquents pendant la nuit.',
      'Se réveille la nuit sans parvenir à se rendormir.',
      'Sommeil agité ou peu réparateur.',
      'Fatigue importante au réveil ou au cours de la journée.',
    ],
  },
  {
    title: 'L\'alimentation',
    items: [
      'Sélectivité alimentaire importante (refuse de nombreux aliments).',
      'Difficulté à accepter certaines textures, odeurs ou températures.',
      'Mange toujours les mêmes aliments et refuse de goûter de nouvelles choses.',
      'Les repas sont souvent une source de stress ou de conflits.',
    ],
  },
  {
    title: 'Les particularités sensorielles',
    items: [
      'Se bouche souvent les oreilles face à certains bruits.',
      'Est très dérangé par les étiquettes des vêtements, certaines coutures ou certaines matières.',
      'Est gêné par les lumières vives ou certains environnements très stimulants.',
      'Recherche certaines sensations (toucher les objets, sauter, tourner sur lui-même…).',
      'Évite les endroits très bruyants ou très fréquentés.',
    ],
  },
  {
    title: 'Les relations avec les autres',
    items: [
      'Difficulté à se faire des amis.',
      'Conflits fréquents.',
      'Difficulté à comprendre certaines règles sociales.',
      'Tendance à s\'isoler ou, au contraire, à envahir l\'espace des autres.',
    ],
  },
  {
    title: 'Le quotidien',
    items: [
      'Difficulté à rester assis.',
      'Grande maladresse.',
      'Besoin constant de bouger.',
      'Fatigue importante liée aux efforts fournis.',
    ],
  },
]
</script>
