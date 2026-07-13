<template>
  <section id="services" class="w-full relative flex items-center justify-center snap-start snap-always">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center z-0" 
      style="background-image: url('https://salonkee.cloud/be/data/8748/marketingImages/n-z3mW0ZXOo1GzM4MmbyXjx-lg--opt');"
    >
      <div class="absolute inset-0 bg-black/70"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 pt-20 md:pt-0 h-full md:h-auto flex flex-col justify-start md:justify-center overflow-y-auto md:overflow-visible">
      <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-8 text-center">Nos Prestations</h2>
      
      <!-- Cards Container -->
      <div class="flex flex-col md:grid md:grid-cols-3 gap-6 pb-20 md:pb-0">
        
        <!-- Coupe Card -->
        <div class="glass-panel p-6 rounded-3xl h-full flex flex-col">
          <div class="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-6 border border-gold/30">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
          </div>
          <h3 class="text-2xl font-heading text-white mb-6">Coupe</h3>
          <ul class="space-y-4 grow">
            <li class="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span class="block text-white font-medium">Coupe</span>
                <span class="text-xs text-gray-400">30 min</span>
              </div>
              <span class="text-gold font-semibold">25 €</span>
            </li>
            <li class="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span class="block text-white font-medium">Coupe enfant</span>
                <span class="text-xs text-gray-400">Jusqu'à 11 ans · 30 min</span>
              </div>
              <span class="text-gold font-semibold">15 €</span>
            </li>
            <li class="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span class="block text-white font-medium">Coupe 3 mois repousse</span>
                <span class="text-xs text-gray-400">45 min</span>
              </div>
              <span class="text-gold font-semibold">35 €</span>
            </li>
            <li class="flex justify-between items-start">
              <div>
                <span class="block text-white font-medium">Coupe + soin visage</span>
                <span class="text-xs text-gray-400">30 min</span>
              </div>
              <span class="text-gold font-semibold">30 €</span>
            </li>
          </ul>
        </div>

        <!-- Barbe Card -->
        <div class="glass-panel p-6 rounded-3xl h-full flex flex-col">
          <div class="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-6 border border-gold/30">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
          </div>
          <h3 class="text-2xl font-heading text-white mb-6">Barbe</h3>
          <ul class="space-y-4 grow">
            <li class="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span class="block text-white font-medium">Premium</span>
                <span class="text-xs text-gray-400">Serviette chaude & gommage · 15 min</span>
              </div>
              <span class="text-gold font-semibold">15 €</span>
            </li>
            <li class="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span class="block text-white font-medium">Rasage complet traditionnel</span>
                <span class="text-xs text-gray-400">Rasage à blanc · 15 min</span>
              </div>
              <span class="text-gold font-semibold">15 €</span>
            </li>
          </ul>
        </div>

        <!-- Coupe et Barbe Card -->
        <div class="glass-panel p-6 rounded-3xl h-full flex flex-col">
          <div class="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-6 border border-gold/30">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 class="text-2xl font-heading text-white mb-6">Coupe & Barbe</h3>
          <ul class="space-y-4 grow">
            <li class="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span class="block text-white font-medium">Coupe et barbe premium</span>
                <span class="text-xs text-gray-400">45 min</span>
              </div>
              <span class="text-gold font-semibold">35 €</span>
            </li>
            <li class="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span class="block text-white font-medium">Rasage de la tête et barbe</span>
                <span class="text-xs text-gray-400">30 min</span>
              </div>
              <span class="text-gold font-semibold">30 €</span>
            </li>
            <li class="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span class="block text-white font-medium">Coupe et barbe + soin visage</span>
                <span class="text-xs text-gray-400">45 min</span>
              </div>
              <span class="text-gold font-semibold">45 €</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div class="mt-10 text-center pb-20 md:pb-0">
        <a 
          href="https://salonkee.be/salon/line-up-barbershop" 
          target="_blank" 
          class="inline-block bg-gold text-black font-semibold text-sm px-8 py-3 rounded-full hover:bg-white transition-colors uppercase tracking-wider"
        >
          Réserver en ligne
        </a>
      </div>
    </div>
  </section>
</template>
