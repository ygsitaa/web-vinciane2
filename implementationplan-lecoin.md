## Plan: Implement “Le coin des petites tornades” as an in-site section

The current site already has a section-based slider and a warm visual language, so the most reliable approach is to add a new dedicated section into that flow, keep all content data-driven, and build reusable UI blocks for the carousel and audio experience. This will preserve the existing architecture while making the new section easy to replace with a CMS later.

### Steps
1. Define the content architecture
- Create a small content layer with typed data structures for coloring pages and audio stories.
- Use local mock data objects so components remain presentation-only and can later be swapped for Strapi or another API.
- Keep ordering, metadata, and asset URLs in the data model rather than hardcoding them into the UI.

2. Integrate the new section into the site structure
- Add a new section entry to the main slider and navigation so “Le coin des petites tornades” becomes part of the site experience instead of an external link.
- Place the section in the flow in a logical position, likely between the library and contact sections.
- Update the navbar and mobile navigation labels to reflect the new in-site section.

3. Build a reusable coloring pages carousel
- Create a reusable carousel component that accepts a list of coloring page items from props or data.
- Support responsive layout for desktop and mobile, accessible controls, and a lightbox/modal for enlarged viewing.
- Add a print action from the enlarged view so each image can be printed easily.
- Keep the component logic generic so more coloring pages can be added later without changing the component behavior.

4. Build a reusable audio stories experience
- Add Plyr as a dependency and create a reusable audio player component that accepts story data as props.
- Render each story card with title, short description, player, play/pause, progress, time display, volume, and download controls.
- Ensure the controls are large, accessible, and suitable for both children and parents.
- Keep the player component generic so it can be reused by other audio-based content later.

5. Style the experience to match the existing design system
- Apply the existing warm palette, rounded cards, soft surfaces, and playful visual hierarchy to both the carousel and audio stories experience.
- Make sure the section is responsive and behaves well in both desktop and mobile layouts.
- Add subtle motion and interaction states that feel welcoming without being overly busy.

6. Wire the section into the app and verify behavior
- Connect the new data objects to the section component and ensure the UI renders from props, not inline hardcoded content.
- Run the Nuxt build and type checks, then test the carousel, modal, and audio controls manually in the browser.
- Confirm that the section is accessible, responsive, and fits the current slider behavior.

### Relevant files
- app/components/NavBar.vue — update navigation to replace the external-link concept with an in-site section.
- app/components/MobileNav.vue — keep mobile navigation aligned with the new section.
- app/components/SectionSlider.vue — add the new section into the slider flow.
- app/components/SectionLibrary.vue — use as a reference for section layout and styling patterns.
- app/components/SectionContact.vue — keep the overall visual language consistent.
- app/assets/css/main.css — extend shared styles for the carousel, modal, and audio player UI.
- package.json — add the Plyr dependency and any future supporting packages.
- app/composables/useAsset.ts — reuse asset loading patterns for local images and audio files.

### Verification
1. Run the Nuxt development server and confirm the new section appears in the main site flow.
2. Check that the carousel opens the selected image in a modal and that the print action works.
3. Verify that audio items display the player controls correctly and support play, pause, progress, volume, and download.
4. Test the experience on mobile and desktop breakpoints to ensure the layout remains readable and touch-friendly.
5. Run the build and type-checking commands to ensure no regressions were introduced.

### Decisions and scope
- The initial implementation will use local mock data and local assets, which keeps the work scoped and avoids introducing a CMS dependency too early.
- The UI will be built around reusable components and prop-based content so the data layer can later be replaced with Strapi without rewriting the section interfaces.
- If local illustration or audio assets are missing, placeholder assets can be added under the existing public images flow before implementation begins.