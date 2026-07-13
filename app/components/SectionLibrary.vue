<template>
  <section id="bibliotheque" class="w-full relative flex items-start justify-center snap-start snap-always overflow-y-auto">
    
    <!-- Background decoration -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20" style="background: radial-gradient(circle, #FBD4AD, transparent 70%);"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style="background: radial-gradient(circle, #E3BCB5, transparent 70%);"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-6 xl:pt-28 pb-12">

      <!-- Header -->
      <div class="text-center mb-10">
        <div class="section-badge mx-auto w-fit">
          <span>📖</span> Collection
        </div>
        <h2 class="text-3xl md:text-5xl font-heading font-bold mb-3" style="color: #3D2B1F;">
          Bibliothèque <span class="text-terracotta">Tribusix</span>
        </h2>
        <p class="text-mid max-w-xl mx-auto text-base md:text-lg">
          Des livres écrits avec le cœur pour accompagner les enfants TDAH et leurs familles au quotidien.
        </p>
      </div>

      <!-- Books Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 justify-items-center">

        <div 
          v-for="book in books" 
          :key="book.id" 
          class="flex flex-col items-center gap-6 w-full max-w-sm"
        >
          <!-- Book Flip Card -->
          <div 
            class="book-card w-52 h-72 md:w-60 md:h-80 cursor-pointer group"
            @click="openModal(book)"
            :title="`Prévisualiser ${book.title}`"
          >
            <div class="book-inner w-full h-full">
              <!-- Front Cover -->
              <div class="book-face">
                <img :src="book.frontCover" :alt="`Couverture avant – ${book.title}`" class="w-full h-full object-cover"/>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style="background: rgba(61,43,31,0.15);">
                  <div class="bg-white/90 text-dark-text text-xs font-bold px-3 py-1.5 rounded-full shadow">👁 Aperçu disponible</div>
                </div>
              </div>
              <!-- Back Cover -->
              <div class="book-face book-face-back">
                <img :src="book.backCover" :alt="`Quatrième de couverture – ${book.title}`" class="w-full h-full object-cover"/>
              </div>
            </div>
          </div>

          <!-- Info -->
          <div class="text-center w-full">
            <h3 class="font-heading font-bold text-lg text-dark-text mb-1">{{ book.title }}</h3>
            <p class="text-xs text-mid italic mb-1">{{ book.subtitle }}</p>
            <p class="text-sm text-mid mb-4 leading-relaxed px-2">{{ book.description }}</p>

            <!-- Hover hint -->
            <p class="text-xs text-terracotta mb-4 font-medium animate-pulse">
              ↔ Survolez pour voir la 4ème de couverture · Cliquez pour un aperçu
            </p>

            <!-- Purchase Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                :href="book.amazonLink" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-primary flex items-center justify-center gap-2 no-underline"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39.01.357.226l-.002.014c-.493 3.113-1.493 5.325-3 6.637l-.46.37c-.022.018-.043.033-.064.048C14.994 28.37 11.87 29 8.57 29 4.15 29 .195 27.6.195 27.6S.09 27.55.05 27.45C-.02 27.23.03 17.87.045 18.02zm9.763-16.97C12 1.05 14.285 1.5 16.15 3c.4.33.63.8.5 1.27l-.02.05c-.13.4-.57.63-.96.5-.05-.013-.1-.028-.14-.045C13.96 4.17 11.9 3.87 9.66 4.07 7.41 4.27 5.4 5 3.63 6.24c-.37.27-.88.2-1.16-.15L2.4 6c-.28-.36-.21-.87.15-1.15C5.01 2.67 7.47 1.8 9.81 1.05zm7.56 4.3l.04.04c2.4 2.79 3.2 6.27 2.38 10.46-.05.27-.29.44-.56.39-.27-.05-.44-.29-.39-.56.75-3.85.01-6.99-2.2-9.57-.19-.22-.16-.55.06-.74.22-.19.55-.16.74.06l-.07-.08zm-5.26 2.15c.67-.08 1.37-.05 2.1.09l.18.04c3.32.88 5.04 4.17 4.15 7.49l-.04.14c-.97 3.4-4.3 5.13-7.62 4.24l-.14-.04c-3.32-.88-5.04-4.17-4.15-7.49.05-.21.11-.42.18-.62.8-2.5 2.77-3.61 5.34-3.85zm-1.26 1.98c-1.82.21-3.2 1.04-3.8 2.96l-.06.2c-.62 2.49.75 5.04 3.25 5.7 2.49.66 5.04-.75 5.7-3.25.66-2.49-.75-5.04-3.25-5.7l-.14-.03c-.57-.12-1.14-.15-1.7-.08z"/></svg>
                Commander sur Amazon
              </a>
              <a 
                :href="book.stripeLink" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-secondary flex items-center justify-center gap-2 no-underline"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/></svg>
                Commander en ligne
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <BookPreviewModal :book="modalBook" @close="closeModal" />

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAsset } from '~/composables/useAsset'
import BookPreviewModal from './BookPreviewModal.vue'

const modalBook = ref<any>(null)

const openModal = (book: any) => { modalBook.value = book }
const closeModal = () => { modalBook.value = null }

const books = [
  {
    id: 1,
    title: 'Mon petit livre pour les enfants tornades',
    subtitle: 'Un espace pour déposer tes émotions',
    description: 'Un livre doux et coloré qui aide les enfants TDAH à comprendre et exprimer leurs émotions à travers des activités simples et bienveillantes.',
    frontCover: useAsset('/images/book2-front.jpg'),
    backCover: useAsset('/images/book2-back.jpg'),
    amazonLink: 'https://www.amazon.fr',
    stripeLink: '#',
    previewPages: [
      { bg: 'rgba(251, 212, 173, 0.3)', text: '"Tu es une tornade… et c\'est extraordinaire ! Tu bouges, tu penses, tu ressens à cent à l\'heure. Ce livre est TON espace à toi, pour souffler, dessiner, écrire et déposer tout ce qui tourbillonne en toi."' },
      { bg: 'rgba(243, 188, 98, 0.2)', text: '"Aujourd\'hui, j\'ai ressenti… (dessine ou écris ici ce que tu ressens. Il n\'y a pas de bonne ou mauvaise réponse. Tout ce que tu vis est valable et important.)"' },
      { bg: 'rgba(227, 188, 181, 0.3)', text: '"Ma super-pouvoir du jour : Je peux être distrait·e, mais je remarque des choses que personne d\'autre ne voit. Aujourd\'hui j\'ai remarqué que…"' },
    ]
  },
  {
    id: 2,
    title: 'Mon petit livre pour les mamans fatiguées',
    subtitle: 'Un espace pour respirer',
    description: 'Pour les mamans qui donnent tout chaque jour. Un espace de douceur, de ressourcement et de soutien bienveillant pour traverser les journées intenses.',
    frontCover: useAsset('/images/book1-front.jpg'),
    backCover: useAsset('/images/book1-back.jpg'),
    amazonLink: 'https://www.amazon.fr',
    stripeLink: '#',
    previewPages: [
      { bg: 'rgba(251, 212, 173, 0.3)', text: '"Ce livre est pour toi, maman. Toi qui cours depuis ce matin, toi qui n\'as pas fini ton café, toi qui adores tes enfants de tout ton être et qui pourtant, parfois, ne sais plus très bien où tu en es."' },
      { bg: 'rgba(243, 188, 98, 0.2)', text: '"Aujourd\'hui, j\'ai besoin de… (espace pour écrire, griffonner, souffler. Personne ne lira ces pages. C\'est rien que pour toi.)"' },
      { bg: 'rgba(227, 188, 181, 0.3)', text: '"Rappelle-toi : une bonne maman n\'est pas une maman parfaite. C\'est une maman présente, authentique, qui fait de son mieux avec ce qu\'elle a. Et ça, c\'est déjà énorme."' },
    ]
  }
]
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>
