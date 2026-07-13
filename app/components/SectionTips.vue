<template>
  <section id="jardin" class="w-full relative flex items-start justify-center snap-start snap-always overflow-y-auto">

    <!-- Background -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20" style="background: radial-gradient(circle, #E3BCB5, transparent 70%);"></div>
      <div class="absolute -bottom-20 right-10 w-80 h-80 rounded-full opacity-15" style="background: radial-gradient(circle, #FBD4AD, transparent 70%);"></div>
      <!-- Leaf decorations -->
      <div class="absolute top-20 right-10 text-7xl opacity-10 select-none">🌿</div>
      <div class="absolute bottom-20 left-10 text-6xl opacity-10 select-none">🌸</div>
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 xl:px-12 pt-6 xl:pt-28 pb-12">

      <!-- Header -->
      <div class="text-center mb-10">
        <div class="section-badge mx-auto w-fit">
          <span>🌷</span> Conseils & Ressources
        </div>
        <h2 class="text-3xl md:text-5xl font-heading font-bold mb-3" style="color: #3D2B1F;">
          Jardin des <span class="text-terracotta">Mamans Fatiguées</span>
        </h2>
        <p class="text-mid max-w-xl mx-auto text-base md:text-lg">
          Un espace de douceur et de ressources pratiques pour accompagner au quotidien vos enfants TDAH avec bienveillance et sérénité.
        </p>
      </div>

      <!-- Tips Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        <div 
          v-for="tip in tips" 
          :key="tip.id" 
          class="tip-card flex flex-col gap-3"
          :style="`border-top: 4px solid ${tip.accentColor};`"
        >
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0" :style="`background: ${tip.bgColor};`">
              {{ tip.emoji }}
            </div>
            <h3 class="font-heading font-bold text-base text-dark-text leading-snug">{{ tip.title }}</h3>
          </div>
          <p class="text-sm text-mid leading-relaxed flex-1">{{ tip.text }}</p>
          <div 
            v-if="tip.tag" 
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold w-fit"
            :style="`background: ${tip.bgColor}; color: ${tip.accentColor};`"
          >
            {{ tip.tag }}
          </div>
        </div>

      </div>

      <!-- Footer CTA -->
      <div class="mt-10 p-6 rounded-3xl text-center" style="background: linear-gradient(135deg, rgba(251,212,173,0.5), rgba(227,188,181,0.4)); border: 1px solid rgba(232,150,100,0.25);">
        <p class="font-heading font-bold text-xl text-dark-text mb-2">
          💌 Des questions ou des témoignages à partager ?
        </p>
        <p class="text-mid text-sm mb-4">Vinciane est là pour vous écouter et vous accompagner.</p>
        <button @click="$emit('go-to-contact')" class="btn-primary">
          Prendre contact
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['go-to-contact'])

const tips = [
  {
    id: 1,
    emoji: '🌬️',
    title: 'La respiration comme ancre',
    text: 'Apprenez à votre enfant la respiration "4-7-8" : inspirer 4 secondes, retenir 7, expirer 8. Pratiquez ensemble dans les moments calmes pour que ça devienne un réflexe lors des crises.',
    accentColor: '#E89664',
    bgColor: 'rgba(232, 150, 100, 0.12)',
    tag: '🧠 Régulation émotionnelle'
  },
  {
    id: 2,
    emoji: '📅',
    title: 'La routine visuelle',
    text: 'Les enfants TDAH ont besoin de structure. Créez un tableau de routine illustré avec des images pour chaque étape du matin et du soir. La prévisibilité est une sécurité pour eux.',
    accentColor: '#F3BC62',
    bgColor: 'rgba(243, 188, 98, 0.12)',
    tag: '📋 Organisation'
  },
  {
    id: 3,
    emoji: '⏱️',
    title: 'Le timer comme allié',
    text: 'Utilisez un timer visuel (type Time Timer) plutôt qu\'un minuteur sonore. Voir le temps qui passe concrètement aide énormément les enfants qui ont du mal avec la notion abstraite du temps.',
    accentColor: '#E3BCB5',
    bgColor: 'rgba(227, 188, 181, 0.2)',
    tag: '⚙️ Outils pratiques'
  },
  {
    id: 4,
    emoji: '💬',
    title: 'Parler en positif',
    text: 'Remplacez "Arrête de bouger !" par "Peux-tu tenir encore 2 minutes ?". Les cerveaux TDAH entendent mieux les instructions positives et concrètes. Soyez spécifique et bref.',
    accentColor: '#E89664',
    bgColor: 'rgba(232, 150, 100, 0.12)',
    tag: '💡 Communication'
  },
  {
    id: 5,
    emoji: '🛑',
    title: 'Votre droit de pause',
    text: 'Vous n\'êtes pas une machine. Quand vous sentez que vous atteignez votre limite, posez-vous. Cinq minutes seul·e dans les toilettes c\'est valide. Prendre soin de vous, c\'est prendre soin d\'eux.',
    accentColor: '#F3BC62',
    bgColor: 'rgba(243, 188, 98, 0.12)',
    tag: '❤️ Bien-être parental'
  },
  {
    id: 6,
    emoji: '🎮',
    title: 'Le mouvement comme besoin',
    text: 'Le besoin de bouger n\'est pas un caprice, c\'est neurologique. Prévoyez des pauses mouvements régulières : sauter 10 fois, faire des étoiles, courir jusqu\'à la boîte aux lettres. Ça aide vraiment à se concentrer ensuite.',
    accentColor: '#E3BCB5',
    bgColor: 'rgba(227, 188, 181, 0.2)',
    tag: '🏃 Activité physique'
  },
  {
    id: 7,
    emoji: '🌙',
    title: 'Le rituel du soir apaisé',
    text: 'Une heure avant le coucher : lumières tamisées, pas d\'écrans. Proposez un bain tiède, de la musique douce, un livre. Les cerveaux TDAH mettent souvent plus de temps à "décrocher". Anticipez.',
    accentColor: '#E89664',
    bgColor: 'rgba(232, 150, 100, 0.12)',
    tag: '😴 Sommeil'
  },
  {
    id: 8,
    emoji: '🤝',
    title: 'Créer des alliances à l\'école',
    text: 'Travaillez main dans la main avec les enseignants. Un petit mot en début d\'année expliquant les besoins de votre enfant peut tout changer. N\'attendez pas que les difficultés s\'accumulent.',
    accentColor: '#F3BC62',
    bgColor: 'rgba(243, 188, 98, 0.12)',
    tag: '🏫 École'
  },
  {
    id: 9,
    emoji: '✨',
    title: 'Célébrer les petits succès',
    text: 'Un effort mérite d\'être nommé. "J\'ai remarqué que tu as posé ton sac tout seul ce matin, c\'est super !" Ces petites reconnaissances construisent l\'estime de soi qui est souvent fragilisée chez les enfants TDAH.',
    accentColor: '#E3BCB5',
    bgColor: 'rgba(227, 188, 181, 0.2)',
    tag: '🌟 Estime de soi'
  }
]
</script>
