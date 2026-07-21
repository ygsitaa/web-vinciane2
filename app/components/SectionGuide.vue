<template>
  <section id="guide" class="w-full relative flex items-start justify-center snap-start snap-always overflow-hidden">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-72 h-72 rounded-full opacity-20" style="background: radial-gradient(circle, #FBD4AD, transparent 70%);"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15" style="background: radial-gradient(circle, #E3BCB5, transparent 70%);"></div>
    </div>

    <div class="relative z-10 w-full h-full overflow-y-auto bg-cover"  :style="{ backgroundImage: `url(${bg})` }">
      <div class="w-full max-w-6xl mx-auto px-6 md:px-12 pt-6 xl:pt-28 pb-12">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-5xl font-heading font-bold mb-3" style="color: #3D2B1F;">
            Le Guide des <span class="text-terracotta">Parents</span>
          </h2>
          <p class="text-mid max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Des chapitres simples, bienveillants et concrets pour mieux comprendre les signes, les besoins et les outils associés à l'ADHD chez l'enfant.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <button
            v-for="chapter in chapters"
            :key="chapter.number"
            type="button"
            class="tip-card text-left h-full cursor-pointer"
            @click="openChapter(chapter)"
          >
            <div class="flex items-center justify-between gap-3 mb-4">
              <div class="w-12 h-12 rounded-2xl bg-peach/60 flex items-center justify-center text-2xl shadow-sm">
                {{ chapter.icon }}
              </div>
              <span class="section-badge mb-0">Chapitre {{ chapter.number }}</span>
            </div>

            <h3 class="font-heading font-bold text-xl text-dark-text mb-2 leading-tight">
              {{ chapter.title }}
            </h3>

            <p class="text-sm text-mid leading-relaxed mb-4">
              {{ chapter.summary }}
            </p>

            <div class="flex items-center justify-between text-sm font-semibold text-terracotta">
              <span>Ouvrir le chapitre</span>
              <span aria-hidden="true">→</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <GuideChapterModal :chapter="selectedChapter" @close="closeChapter" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAsset } from '~/composables/useAsset'
import GuideChapterModal from './GuideChapterModal.vue'

const bg = useAsset('/images/background_guide.jpg')

interface GuideChapter {
  number: number
  icon: string
  title: string
  summary: string
  intro: string
  questions: string[]
  advice: string[]
}

const chapters: GuideChapter[] = [
  {
    number: 1,
    icon: '🧠',
    title: 'Je pense que mon enfant est différent',
    summary: 'Quels signes peuvent m’interpeller ? À partir de quand s’inquiéter ? Observer sans paniquer.',
    intro: 'Lorsque l’on soupçonne un TDAH chez son enfant, le plus important est de rester observateur·rice, sans dramatiser ni minimiser ce que l’on voit. Les signes peuvent être visibles dans la vie quotidienne, à la maison comme à l’école.',
    questions: [
      'À quel moment la difficulté devient-elle un vrai signal d’alerte ?',
      'Mon enfant est-il souvent en difficulté pour maintenir son attention ?',
      'Observe-t-il des soucis de gestion des impulsions ou de l’organisation ?'
    ],
    advice: [
      'Commencez par noter les situations répétées, les moments de fatigue, les tensions et les points positifs.',
      'Ne cherchez pas une explication unique : un profil d’enfant peut évoluer au fil du temps.',
      'L’observation sans panique permet d’en parler plus sereinement avec un professionnel si besoin.'
    ]
  },
  {
    number: 2,
    icon: '🫶',
    title: 'Créer un cadre rassurant',
    summary: 'Des routines simples, des limites claires et des paroles qui aident à se sentir en sécurité.',
    intro: 'Les enfants avec TDAH ont souvent besoin d’un cadre stable, mais pas rigide. Une routine prévisible peut aider à réduire le stress du quotidien tout en laissant de la place à la flexibilité.',
    questions: [
      'Quelles sont les routines qui semblent les plus utiles à la maison ?',
      'Comment aider mon enfant sans tomber dans la pression ou la surcharge ?',
      'Que faire quand il y a un conflit ou un imprévu ?'
    ],
    advice: [
      'Privilégiez des consignes courtes et répétées, plutôt qu’un discours long et complexe.',
      'Anticipez les transitions : “dans 5 minutes, on range”.',
      'Le cadre rassure, mais la relation reste au centre : la douceur et la cohérence vont de pair.'
    ]
  },
  {
    number: 3,
    icon: '🌈',
    title: 'Comprendre les émotions',
    summary: 'Les difficultés de concentration ne sont pas le seul sujet : la colère, la tristesse et l’épuisement font aussi partie du tableau.',
    intro: 'Un enfant qui présente des signes de TDAH peut être très sensible à la frustration, au sentiment d’échec ou à la fatigue mentale. En parler, lui donner un vocabulaire et des espaces de respiration aide à mieux réguler.',
    questions: [
      'Mon enfant exprime-t-il mieux sa frustration par des pleurs, des colères ou de la fuite ?',
      'Que se passe-t-il avant la difficulté ?',
      'Quels mots ou gestes aident vraiment à apaiser ?'
    ],
    advice: [
      'Laissez un temps de pause sans jugement pour permettre au corps et au cerveau de reprendre leur souffle.',
      'Aidez votre enfant à nommer ce qu’il ressent avant ce qu’il a fait.',
      'Le besoin d’être entendu compte autant que le besoin d’être corrigé.'
    ]
  },
  {
    number: 4,
    icon: '📚',
    title: 'Accompagner à l’école',
    summary: 'Des ajustements simples, une communication juste, et des outils qui rendent le quotidien plus supportable.',
    intro: 'L’école peut être un lieu de grande difficulté pour les enfants avec TDAH, surtout si les consignes sont longues ou si les attentes sont très lourdes. Une collaboration sereine avec les enseignants aide vraiment à soutenir l’enfant.',
    questions: [
      'Quelles démarches sont utiles au moment d’évoquer la situation ?',
      'Mon enfant a-t-il besoin d’un aménagement de travail ?',
      'Quelles sont les petites adaptations qui le soutiennent vraiment ?'
    ],
    advice: [
      'Partez sur des observations concrètes et des exemples du quotidien.',
      'Demandez des solutions pratiques, pas seulement un diagnostic ou une validation.',
      'Un environnement structuré aide à réduire la surcharge mentale.'
    ]
  },
  {
    number: 5,
    icon: '💤',
    title: 'Le repos compte aussi',
    summary: 'L’enfant n’a pas seulement besoin d’aide : il a aussi besoin d’un rythme et d’un temps de récupération.',
    intro: 'Quand les journées sont complexes, la fatigue s’accumule vite. Le sommeil, les pauses, les moments de calme et la régulation des stimuli sont essentiels pour le développement et le bien-être.',
    questions: [
      'Que se passe-t-il quand mon enfant est fatigué ?',
      'Y a-t-il des moments où l’environnement lui paraît trop chargé ?',
      'Quel type de pause le remet le mieux en équilibre ?'
    ],
    advice: [
      'Un quotidien trop chargé peut masquer une vraie fatigue, pas seulement un manque de discipline.',
      'Les pauses doivent être prévues, pas vécues comme des récompenses exceptionnelles.',
      'Un enfant fatigué a besoin de repères, de douceur et d’espace pour se retrouver.'
    ]
  },
  {
    number: 6,
    icon: '✨',
    title: 'Se souvenir que l’enfant n’est pas un problème',
    summary: 'La compréhension ouvre la voie à la confiance, à l’estime de soi et à une relation plus apaisée.',
    intro: 'L’accompagnement d’un enfant différent ne doit pas être réduit à la gestion des difficultés. Il est aussi question de rencontrer sa singularité, de valoriser ses forces et de l’aider à croire en lui.',
    questions: [
      'Quelles sont ses forces, ses talents, ses zones de lumière ?',
      'Comment lui montrer qu’on le voit comme un enfant complet ?',
      'Quelles petites victoires pouvons-nous célébrer chaque semaine ?'
    ],
    advice: [
      'Les progrès ne sont pas toujours visibles immédiatement : il faut souvent regarder le chemin, pas seulement le résultat.',
      'Une relation de confiance aide à réduire la honte et le sentiment d’échec.',
      'Le but n’est pas de “corriger” l’enfant, mais de l’accompagner avec bienveillance.'
    ]
  }
]

const selectedChapter = ref<GuideChapter | null>(null)

const openChapter = (chapter: GuideChapter) => {
  selectedChapter.value = chapter
}

const closeChapter = () => {
  selectedChapter.value = null
}
</script>
