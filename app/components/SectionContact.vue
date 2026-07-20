<template>
  <section id="contact" class="w-full relative flex items-center justify-center snap-start snap-always">
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(251,212,173,0.7), rgba(227,188,181,0.65));"></div>
      <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-25" style="background: radial-gradient(circle, #F3BC62, transparent 70%);"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20" style="background: radial-gradient(circle, #E89664, transparent 70%);"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-0 h-full md:h-auto overflow-y-auto md:overflow-visible">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start pb-20 md:pb-0">
        <div class="flex flex-col gap-8">
          <div class="soft-panel p-8 rounded-3xl">
            <h2 class="text-3xl font-heading text-dark-text mb-4">Contactez-moi</h2>
            <p class="text-mid mb-6 leading-relaxed">Vous souhaitez partager un témoignage, poser une question, découvrir les projets ou passer commande par email ? Le formulaire ci-dessous est là pour ça.</p>

            <form action="https://api.web3forms.com/submit" method="POST" class="flex flex-col gap-4">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
              <input type="hidden" name="subject" value="Nouveau message depuis le site Vinciane">
              <input type="hidden" name="redirect" value="https://web3forms.com/success">

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Votre nom" required class="glass-input px-4 py-3 rounded-xl text-sm w-full">
                <input type="email" name="email" placeholder="Votre email" required class="glass-input px-4 py-3 rounded-xl text-sm w-full">
              </div>
              <input type="text" name="phone" placeholder="Téléphone (optionnel)" class="glass-input px-4 py-3 rounded-xl text-sm w-full">
              <textarea name="message" placeholder="Votre message" rows="4" required class="glass-input px-4 py-3 rounded-xl text-sm w-full resize-none"></textarea>

              <button type="submit" class="btn-primary mt-2">
                Envoyer le message
              </button>
            </form>
          </div>

        </div>

        <div class="flex flex-col gap-6">
          <div class="soft-panel p-6 rounded-3xl">
            <h3 class="font-heading text-2xl text-dark-text mb-3">Suivez l’aventure</h3>
            <p class="text-mid mb-6">Retrouvez les actualités, ressources et moments de vie autour des livres de Vinciane.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#" target="_blank" class="soft-panel p-4 rounded-2xl flex items-center gap-4 transition-colors group">
                <div class="w-10 h-10 rounded-full bg-[#1877F2]/15 flex items-center justify-center text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <p class="text-dark-text text-sm font-medium">Facebook</p>
                  <p class="text-xs text-mid">@vinciane</p>
                </div>
              </a>

              <a href="#" target="_blank" class="soft-panel p-4 rounded-2xl flex items-center gap-4 transition-colors group">
                <div class="w-10 h-10 rounded-full bg-[#E1306C]/15 flex items-center justify-center text-[#E1306C] group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <p class="text-dark-text text-sm font-medium">Instagram</p>
                  <p class="text-xs text-mid">@vinciane</p>
                </div>
              </a>
            </div>
          </div>

          <div class="warm-panel p-6 rounded-3xl text-center">
            <p class="font-heading font-bold text-xl text-dark-text mb-2">📚 Un livre peut ouvrir un monde</p>
            <p class="text-mid text-sm mb-4">Chaque page est pensée pour apporter présence, douceur et compréhension.</p>
            <button @click="slider.goTo(2)" class="btn-secondary">Voir la bibliothèque</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSlider } from '../composables/useSlider'

const slider = useSlider()
</script>
