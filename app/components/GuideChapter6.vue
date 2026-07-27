<template>
  <div class="chapter-content">
    <!-- Header -->
    <div class="chapter-header">
      <div class="chapter-icon-badge">🤝</div>
      <div>
        <div class="section-badge text-xs mb-2">📘 Chapitre 6</div>
        <h3 class="chapter-title">Les ressources pour vous accompagner en Belgique</h3>
      </div>
    </div>

    <p class="chapter-intro">
      Entre les hôpitaux, les centres pluridisciplinaires, les professionnels indépendants, les associations et les services d'accompagnement, il est parfois difficile de s'y retrouver. Vous ne devez pas traverser ce parcours seul.
    </p>

    <!-- Resources -->
    <div class="space-y-3">
      <div v-for="resource in resources" :key="resource.title" class="chapter-card border-terracotta/20 bg-white/70">
        <p class="chapter-card-label text-terracotta">{{ resource.title }}</p>
        <p class="text-sm text-dark-text leading-relaxed mb-2">{{ resource.description }}</p>
        <ul class="chapter-list" v-if="resource.items.length">
          <li v-for="item in resource.items" :key="item">
            <span class="bullet text-terracotta">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <p v-if="resource.note" class="text-xs text-mid italic mt-2">{{ resource.note }}</p>
      </div>
    </div>

    <!-- Vinciane — longer personal note -->
    <div class="chapter-card border-rose/20 bg-peach/20">
      <p class="chapter-card-label text-terracotta">Le regard de Vinciane</p>
      <div class="space-y-2 text-sm text-dark-text leading-relaxed">
        <p>Chaque enfant est unique.</p>
        <p>Certains parents trouveront rapidement des réponses. Pour d'autres, le chemin sera plus long, parfois semé de doutes, de remises en question et de nouveaux bilans.</p>
        <p>Nous en sommes nous-mêmes la preuve. Cela fait maintenant plusieurs années que nos filles sont accompagnées par différents professionnels. Nous avons déjà obtenu de nombreuses réponses, mais nous continuons encore aujourd'hui à chercher à mieux comprendre certaines de leurs difficultés.</p>
        <p class="font-semibold">Et tu sais quoi&nbsp;? Ce n'est pas un échec.</p>
        <p>Comprendre un enfant ne se résume pas à poser un diagnostic. C'est apprendre à découvrir son fonctionnement, ses forces, ses besoins et ce qui lui permettra de s'épanouir.</p>
        <p>Alors, si toi aussi tu as parfois l'impression d'avancer lentement, ne perds pas courage. Chaque rendez-vous, chaque observation et chaque échange permettent de mieux comprendre ton enfant. Même lorsque le chemin paraît long, tu avances déjà dans la bonne direction.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const resources = [
  {
    title: 'Les hôpitaux',
    description: 'Certains hôpitaux disposent d\'équipes spécialisées dans les troubles du neurodéveloppement (TDAH, troubles DYS, TSA…). Selon la situation de votre enfant, ils peuvent proposer\u00a0:',
    items: [
      'un bilan diagnostique',
      'une consultation spécialisée',
      'un suivi médical',
      'une prise en charge multidisciplinaire',
    ],
    note: 'Les délais peuvent parfois être longs, mais ces équipes travaillent souvent en collaboration avec les autres professionnels qui accompagnent votre enfant.',
  },
  {
    title: 'Les centres pluridisciplinaires',
    description: 'Ces centres regroupent plusieurs professionnels au même endroit. Selon les structures, vous pourrez y rencontrer\u00a0:',
    items: [
      'un neuropsychologue',
      'un logopède',
      'un psychologue',
      'un psychomotricien',
      'un ergothérapeute',
      'un neuropédiatre ou un pédopsychiatre',
    ],
    note: 'L\'avantage est que les professionnels peuvent échanger entre eux afin d\'offrir un accompagnement cohérent à votre enfant.',
  },
  {
    title: 'Les professionnels indépendants',
    description: 'Tous les professionnels ne travaillent pas dans un centre. De nombreux spécialistes exercent en cabinet privé et collaborent régulièrement avec les écoles, les médecins et d\'autres thérapeutes.',
    items: [],
    note: 'Le plus important n\'est pas qu\'ils travaillent dans une même structure, mais qu\'ils puissent communiquer ensemble lorsque cela est utile.',
  },
  {
    title: 'Les associations',
    description: 'Les associations peuvent être d\'une aide précieuse. Elles proposent notamment\u00a0:',
    items: [
      'des informations fiables',
      'des conférences',
      'des groupes de parole',
      'des formations',
      'un soutien aux familles',
    ],
    note: 'Parmi les ressources reconnues en Belgique\u00a0: TDA/H Belgique et le Réseau Centre de Ressources Autisme Wallonie.',
  },
  {
    title: 'Les ressources scolaires',
    description: 'L\'école n\'est pas seule. Selon les besoins de votre enfant, d\'autres acteurs peuvent intervenir\u00a0:',
    items: [
      'le PMS',
      'la direction',
      'les pôles territoriaux',
      'les services spécialisés',
    ],
    note: 'Ils peuvent travailler en collaboration avec les professionnels qui suivent votre enfant afin de mettre en place des aménagements adaptés.',
  },
]
</script>
