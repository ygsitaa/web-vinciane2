# Migration to Author Website for ADHD Kids Books

This document outlines the plan to transform the existing barbershop website into a beautiful, engaging platform for a French author of ADHD children's books.

## User Review Required

> [!IMPORTANT]
> The color palette has been completely shifted from dark/gold to softer tones. We will need to adjust the current dark "glassmorphism" to a lighter version that complements the new palette. Please review the color mapping below.
> 
> **Web3Forms Integration**: To make the contact form functional, you will need a Web3Forms Access Key. We will set it up so you can add the key easily later.
>
> **External Links**: We will add the external links ("Le coin des petites tornades" and "Blog") to the navigation, but the actual URLs need to be provided later. We will use `#` for now.

## Open Questions

> [!WARNING]
> 1. Do you have specific images for the author presentation (Homepage) or should I use an AI-generated placeholder for now? - AI generated for now
> 2. Do you have the actual cover images (front/back) for the 2 books, or should I generate placeholders? - Images are added in public/images
> 3. For the book preview modal, should it just be a few static images of pages, or text? - Text
> 4. Do you prefer a light theme overall since the new colors are quite bright and soft, replacing the current dark theme (`#0f0f0f`)? (Recommended: Light or Cream background to fit the Terracotta/Peach/Lilac palette). - Light theme based on new color palette

## Proposed Changes

### CSS & Design System

Update `main.css` to implement the new color palette and adapt the global styles to a softer, more welcoming aesthetic suitable for a children's book author.

#### [MODIFY] [main.css](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/assets/css/main.css)
- Replace `--color-brand-gold`, `--color-brand-dark`, `--color-brand-cream` with the new palette:
  - Terracotta: `#E89664`
  - Peach: `#FBD4AD`
  - Mustard: `#F3BC62`
  - Lilac: `#E3BCB5`
- Change global background to a soft cream or white instead of dark.
- Adjust `.glass-panel` and `.glass-input` to work on lighter backgrounds.

---

### Navigation Components

Update navigation to reflect the new sections, add external links, and replace the barbershop branding.

#### [MODIFY] [NavBar.vue](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/components/NavBar.vue)
- Update navigation links: Accueil, Bibliothèque Tribusix, Jardin Des Mamans Fatiguées, Contact.
- Add external links with an icon indicating they open in a new tab: "Le coin des petites tornades" & "Blog".
- Replace "LINE UP" brand text.

#### [MODIFY] [MobileNav.vue](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/components/MobileNav.vue)
- Mirror the link changes from `NavBar.vue`.

---

### Slider & Sections

Add the new sections to the GSAP slider and rename/create components.

#### [MODIFY] [SectionSlider.vue](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/components/SectionSlider.vue)
- Import and register 4 slides: Home, Library, Tips, Contact.
- Adjust GSAP animations and refs to support 4 sections instead of 3.

#### [MODIFY] [SectionHome.vue](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/components/SectionHome.vue)
- Transform into an "Accueil" presentation section about the author.
- Include a welcoming layout with an author photo placeholder and biography text.

#### [DELETE] [SectionServices.vue](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/components/SectionServices.vue)

#### [NEW] [SectionLibrary.vue](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/components/SectionLibrary.vue)
- Replaces `SectionServices.vue`.
- Features 2 books initially.
- Implements CSS 3D transforms for hover front/back cover flip.
- Includes Amazon & Stripe purchase buttons.
- Emits an event to open the Preview Modal.

#### [NEW] [BookPreviewModal.vue](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/components/BookPreviewModal.vue)
- A pop-up modal component to show preview pages of the selected book.

#### [NEW] [SectionTips.vue](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/components/SectionTips.vue)
- "Jardin Des Mamans Fatiguées" section.
- Layout for various tips/advices (e.g., masonry grid or elegant list) to help parents.

#### [MODIFY] [SectionContact.vue](file:///c:/Users/danie/repos/vinciane-livres-2/nuxt-app/app/components/SectionContact.vue)
- Integrate Web3Forms for the email form.
- Add Facebook and Instagram social media links/icons.
- Remove old barbershop contact info (address, phone).

## Verification Plan

### Automated Tests
- Run `npm run typecheck` (if applicable) and check Nuxt build logs for errors.

### Manual Verification
- Start the local dev server and manually click through all sections using desktop and mobile views.
- Test the GSAP slide transitions between 4 sections.
- Verify the book hover 3D flip effect and preview modal functionality.
- Ensure the new color palette is applied cohesively across all elements.
