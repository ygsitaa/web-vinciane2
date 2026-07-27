<template>
  <div class="chapter-content">
    <!-- Header -->
    <div class="chapter-header">
      <div class="chapter-icon-badge">👥</div>
      <div>
        <div class="section-badge text-xs mb-2">📘 Chapitre 4</div>
        <h3 class="chapter-title">À quoi sert chaque professionnel&nbsp;?</h3>
      </div>
    </div>

    <p class="chapter-intro">
      Il est fréquent que plusieurs professionnels travaillent ensemble pour aider votre enfant. Voici un aperçu de chaque intervenant et de son rôle.
    </p>

    <!-- Core professionals -->
    <div class="space-y-3">
      <div v-for="pro in corePros" :key="pro.title" class="chapter-card border-terracotta/20 bg-white/70">
        <p class="chapter-card-label text-terracotta">{{ pro.emoji }} {{ pro.title }}</p>
        <p class="text-sm text-mid leading-relaxed mb-2">{{ pro.description }}</p>
        <ul class="chapter-list" v-if="pro.items.length">
          <li v-for="item in pro.items" :key="item">
            <span class="bullet text-terracotta">✔</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Specialists heading -->
    <p class="chapter-card-label text-terracotta mt-2 px-1">Les spécialistes</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div v-for="spec in specialists" :key="spec.title" class="chapter-card border-terracotta/20 bg-peach/20">
        <p class="font-heading font-bold text-sm text-dark-text mb-1">{{ spec.title }}</p>
        <p class="text-xs text-mid mb-2">{{ spec.description }}</p>
        <ul class="chapter-list text-xs">
          <li v-for="item in spec.items" :key="item">
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
        Il est fréquent que plusieurs professionnels travaillent ensemble. Par exemple, un enfant peut être suivi à la fois par un logopède, un psychologue et un ergothérapeute. Cela ne signifie pas que la situation est plus grave. Cela signifie simplement que chaque professionnel apporte son regard et ses compétences pour aider votre enfant à progresser.
      </p>
    </div>

    <!-- Avec douceur -->
    <div class="chapter-card border-terracotta/20 bg-lilac/20">
      <p class="chapter-card-label text-dark-text">Avec douceur</p>
      <p class="text-sm text-mid leading-relaxed">
        Ne cherchez pas à trouver immédiatement LE bon spécialiste. Commencez par parler avec l'école, observez votre enfant et avancez étape par étape. Chaque rendez-vous vous aidera à mieux comprendre ses besoins.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const corePros = [
  {
    emoji: '👩‍🏫',
    title: 'L\'enseignant',
    description: 'C\'est souvent la personne qui passe le plus de temps avec votre enfant en dehors de la maison. Il pourra vous expliquer\u00a0:',
    items: [
      'ce qu\'il observe en classe',
      'dans quelles situations les difficultés apparaissent',
      'si elles sont présentes depuis longtemps',
      'comment votre enfant se comporte avec les autres enfants',
    ],
  },
  {
    emoji: '🏫',
    title: 'Le PMS ou la direction de l\'école',
    description: 'Selon les observations de l\'école, ils pourront\u00a0:',
    items: [
      'vous écouter',
      'vous conseiller',
      'proposer certaines adaptations',
      'vous orienter vers les professionnels les plus adaptés',
    ],
  },
  {
    emoji: '🩺',
    title: 'Le médecin traitant ou le pédiatre',
    description: 'Il pourra\u00a0:',
    items: [
      'vérifier qu\'il n\'existe pas une cause médicale',
      'vous orienter vers les spécialistes adaptés',
      'coordonner certains examens si nécessaire',
    ],
  },
]

const specialists = [
  {
    title: 'Le logopède',
    description: 'Intervient principalement lorsque l\'enfant présente des difficultés de\u00a0:',
    items: ['langage', 'lecture', 'écriture', 'orthographe', 'calcul'],
  },
  {
    title: 'Le neuropsychologue',
    description: 'Évalue notamment\u00a0:',
    items: ['l\'attention', 'la mémoire', 'les fonctions exécutives', 'le raisonnement', 'les capacités intellectuelles'],
  },
  {
    title: 'Le psychologue',
    description: 'Accompagne les enfants qui vivent\u00a0:',
    items: ['de l\'anxiété', 'un manque de confiance', 'des difficultés émotionnelles', 'des difficultés relationnelles'],
  },
  {
    title: 'L\'ergothérapeute',
    description: 'Aide l\'enfant lorsqu\'il rencontre des difficultés dans\u00a0:',
    items: ['l\'écriture', 'l\'organisation', 'l\'autonomie', 'les gestes du quotidien', 'les adaptations scolaires'],
  },
  {
    title: 'Le psychomotricien',
    description: 'Travaille notamment sur\u00a0:',
    items: ['la coordination', 'l\'équilibre', 'le schéma corporel', 'la motricité globale'],
  },
  {
    title: 'Le neuropédiatre',
    description: 'Spécialisé dans le développement neurologique. Il peut\u00a0:',
    items: ['poser ou confirmer certains diagnostics', 'proposer des examens complémentaires', 'prescrire un traitement si nécessaire'],
  },
  {
    title: 'Le pédopsychiatre',
    description: 'Accompagne les enfants lorsque les difficultés émotionnelles, comportementales ou psychiques sont plus importantes.',
    items: [],
  },
]
</script>
