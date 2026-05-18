---
name: Clinical Maternal Care
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#4a4452'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#7b7484'
  outline-variant: '#ccc3d4'
  surface-tint: '#6d46bb'
  primary: '#320075'
  on-primary: '#ffffff'
  primary-container: '#4a1d96'
  on-primary-container: '#b794ff'
  inverse-primary: '#d2bbff'
  secondary: '#67587b'
  on-secondary: '#ffffff'
  secondary-container: '#e9d5ff'
  on-secondary-container: '#6a5a7e'
  tertiary: '#002d27'
  on-tertiary: '#ffffff'
  tertiary-container: '#00453c'
  on-tertiary-container: '#59b7a6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#552ba1'
  secondary-fixed: '#eddcff'
  secondary-fixed-dim: '#d2bfe8'
  on-secondary-fixed: '#221534'
  on-secondary-fixed-variant: '#4f4062'
  tertiary-fixed: '#96f3e1'
  tertiary-fixed-dim: '#7ad7c6'
  on-tertiary-fixed: '#00201b'
  on-tertiary-fixed-variant: '#005046'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  interactive:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 16px
  card-gap: 20px
  section-margin: 48px
---

## Brand & Style

The design system is anchored in the "Expert Clinical meets Maternal Care" philosophy. It balances the rigor of medical data collection with the warmth of a supportive health companion. The visual language is refined and professional, yet avoids the coldness often found in clinical tools by utilizing soft transitions and empathetic color accents.

The style is a sophisticated blend of **Modern Corporate** and **Minimalism**. It prioritizes cognitive ease through generous whitespace and a card-based architecture that breaks complex nutritional surveys into manageable, bite-sized interactions. The interface should feel like a guided conversation with a specialist who cares deeply about the participant's well-being.

## Colors

The palette is led by **Deep Purple**, signifying authority, wisdom, and medical professionalism. This is the primary color for action states and brand-heavy elements. 

**Lavender** acts as a soft secondary bridge, used for secondary buttons and background fills to soften the visual impact of the deep purple. **Soft Teal** serves as an empathetic accent, used for progress indicators and success states to evoke a sense of health and calm.

High contrast is maintained by using a deep charcoal neutral for all primary text, ensuring maximum readability for participants under various lighting conditions or stress levels.

## Typography

This design system utilizes **Manrope** for headlines to provide a modern, balanced, and trustworthy clinical feel. Its geometric nature offers high legibility while remaining approachable. 

**Inter** is utilized for body copy and data entry points. It is the workhorse of the system, selected for its exceptional performance in functional UI environments. The hierarchy is intentionally spacious; large body text (18px) is preferred for survey questions to ensure participants can process information effortlessly. All labels are clear and use increased tracking for better legibility at smaller sizes.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (centered 720px max-width for survey focus) and a fluid model on mobile. A vertical rhythm based on an 8px base unit ensures consistent breathing room between elements.

Whitespace is treated as a functional component rather than empty space; it reduces survey fatigue and highlights the active question. Sections within the survey are separated by significant vertical margins to clearly signal the transition between topics (e.g., from "Daily Habits" to "Specific Intake").

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Ambient Shadows**. The background is a very light grey-tinted white, while the active question cards are pure white. 

Shadows are used sparingly and are extremely diffused (Blur: 30px, Opacity: 4%, Y: 8px), tinted with the primary Deep Purple to create a soft, "lifting" effect from the page. This prevents the UI from feeling flat and clinical, adding a subtle tactile quality that feels premium and safe. Low-contrast outlines (1px solid, 10% opacity Deep Purple) are used to define card boundaries without creating visual clutter.

## Shapes

The design system employs a **Rounded** shape language to evoke empathy and safety. The primary container cards utilize a 16px corner radius (rounded-lg), while larger interactive selection cards may push to 24px (rounded-xl). 

Buttons and input fields follow the consistent 8px (rounded-md) to 12px (rounded-lg) standard, ensuring that no "sharp" edges exist in the interface, reinforcing the maternal care aspect of the brand vibe.

## Components

### Selection Cards
Large, tap-friendly cards used for multiple-choice questions. These feature a subtle transition: upon selection, the border thickens to 2px in Deep Purple, and the background shifts to a 5% Lavender tint.

### Progress Bars
A slim, elegant bar at the top of the viewport. It uses the Soft Teal accent color to show progress, providing a refreshing visual reward as the participant moves through the study.

### Scale Sliders
Minimalist horizontal tracks for "1 to 10" ratings. The thumb is a large, easy-to-drag Deep Purple circle. Labels at either end use the `label-caps` typography to provide clear clinical context.

### Minimalist Input Fields
Fields for numeric or text data use a "floating label" style with a simple bottom border that transforms into a soft-filled box on focus. This maintains a clean, uncluttered look while being highly functional.

### Buttons
Primary buttons are solid Deep Purple with white text. Secondary buttons use a Lavender background with Deep Purple text. All buttons have a minimum height of 56px to ensure they are exceptionally tap-friendly for all users.