# Nexelence Design Specifications (WordPress + Divi 5)

This document provides the exact technical specifications to recreate the Nexelence futuristic brand presence within the Divi 5 environment.

---

## 1. Brand Color Palette (Logo Exact)

| Element | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary Cyan** | `#00f2ff` | Primary buttons, active links, top glitch layer, icons. |
| **Secondary Magenta** | `#ff00e5` | Accents, gradients, bottom glitch layer, hover states. |
| **Accent Blue** | `#4d5eff` | Globe lines, brackets, borders, secondary accents. |
| **Deep Dark** | `#020617` | Section backgrounds, footer, card backgrounds. |
| **Glass White** | `rgba(255, 255, 255, 0.05)` | Card backgrounds (Glassmorphism). |

---

## 2. Typography (Google Fonts)

*   **Headings (H1 - H6):** `Space Grotesk`
    *   *Weight:* 700 (Bold) or 500 (Medium)
    *   *Letter Spacing:* -0.05em
*   **Body Text:** `Inter`
    *   *Weight:* 400 (Regular)
    *   *Line Height:* 1.6

---

## 3. Custom CSS (Add to Divi > Theme Options > Custom CSS)

```css
/* 1. Glitch Effect for Logo/Headings */
.nexelence-glitch {
  position: relative;
  display: inline-block;
  font-weight: 900;
}

.nexelence-glitch::before,
.nexelence-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
}

.nexelence-glitch::before {
  color: #00f2ff; /* Cyan */
  z-index: -1;
  transform: translate(2px, 2px);
}

.nexelence-glitch::after {
  color: #ff00e5; /* Magenta */
  z-index: -2;
  transform: translate(-2px, -2px);
}

/* 2. Glassmorphism Card Style */
.nex-glass-card {
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 24px !important;
  transition: all 0.3s ease !important;
}

.nex-glass-card:hover {
  border-color: rgba(0, 242, 255, 0.5) !important;
  background: rgba(255, 255, 255, 0.06) !important;
  box-shadow: 0 0 30px rgba(0, 242, 255, 0.1);
}

/* 3. Neon Button Glow */
.nex-btn-glow {
  box-shadow: 0 0 15px rgba(0, 242, 255, 0.3);
  transition: all 0.3s ease !important;
}

.nex-btn-glow:hover {
  box-shadow: 0 0 30px rgba(0, 242, 255, 0.6) !important;
  transform: translateY(-2px);
}

/* 4. Grid Background Pattern */
.nex-grid-bg {
  background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
  background-size: 40px 40px;
}
```

---

## 4. Divi 5 Module Configurations

### Hero Section
*   **Section Background:** `#020617`
*   **CSS Class:** `nex-grid-bg`
*   **Headline (Text Module):**
    *   Use `<span class="nexelence-glitch" data-text="Excellence.">Excellence.</span>`
*   **Buttons:**
    *   *Primary:* Background `#00f2ff`, Text `#020617`, Border Radius `50px`, CSS Class `nex-btn-glow`.

### Services (Blurb Modules)
*   **Column Layout:** 3-Column Row.
*   **Module Settings:**
    *   *Background:* Transparent.
    *   *CSS Class:* `nex-glass-card`.
    *   *Icon Color:* `#00f2ff`.
    *   *Title Text:* Space Grotesk, Bold, White.
    *   *Body Text:* Inter, Opacity 60%, White.

### Pricing Tables (Pricing Table Module)
*   **Table Background:** `rgba(255,255,255,0.05)`.
*   **Currency:** South African Rand (R).
*   **Starter Package:** R7,500.
*   **Professional Package:** R13,000.
*   **Featured Table:**
    *   *Border:* 2px Solid `#00f2ff`.
    *   *Header Background:* `#00f2ff`.
    *   *Header Text:* `#020617`.
*   **Excluded Items:** Set opacity to 30%.

---

## 9. Contact Information

*   **Primary Email:** `info@nexelence.co.za`
*   **Usage:** Footer contact section, CTA buttons, and newsletter placeholder.

---

## 10. Divi 5 Scroll Effects (Animations)

Apply these in the **Advanced > Transitions & Effects** tab of each module:

1.  **Hero Headline:** Fade In + Slide Up (Duration: 800ms, Delay: 200ms).
2.  **Service Blurbs:** Fade In (Duration: 600ms, Staggered Delay: 100ms per module).
3.  **Pricing Cards:** Scale Up on Scroll (Start: 90%, End: 100%).
4.  **CTA Background:** Parallax Background Image (Method: CSS, Speed: 0.2).

---

## 6. Logo Implementation (Header)

To match the logo image exactly in your Divi Header:
1.  Add a **Code Module** to your Global Header.
2.  Insert the following HTML (includes the SVG globe/bracket logo):
    ```html
    <div class="nex-logo-container" style="display: flex; align-items: center; gap: 12px;">
      <!-- Logo SVG -->
      <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
        <svg viewBox="0 0 24 24" style="width: 24px; height: 24px; fill: none; stroke-width: 1.5;">
          <circle cx="12" cy="12" r="10" stroke="#00f2ff" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="#00f2ff" stroke-opacity="0.5" />
          <line x1="12" y1="2" x2="12" y2="22" stroke="#00f2ff" stroke-opacity="0.5" />
          <path d="M12 2C14.5 4.7 15.9 8.3 16 12C15.9 15.7 14.5 19.3 12 22C9.5 19.3 8.1 15.7 8 12C8.1 8.3 9.5 4.7 12 2Z" stroke="#ff00e5" />
          <path d="M7 3L4 3L4 21L7 21" stroke="#4d5eff" stroke-width="2" />
          <path d="M17 3L20 3L20 21L17 21" stroke="#4d5eff" stroke-width="2" />
        </svg>
      </div>
      <!-- Text -->
      <div class="nexelence-glitch" style="font-size: 20px; color: #fff;" data-text="NEXELENCE">
        NEXELENCE
      </div>
    </div>
    ```
3.  Ensure the `nexelence-glitch` CSS from Step 3 is active.

---

## 7. Floating Pill Header (Divi Theme Builder)

To create the floating pill header in Divi 5:

1.  **Header Section Settings:**
    *   **Position:** Fixed (Top: 20px).
    *   **Z-Index:** 999.
    *   **Background:** Transparent.
    *   **Width:** 100%.
2.  **Row Settings (The Pill):**
    *   **Width:** 60% (Max Width: 650px).
    *   **Background:** `rgba(2, 6, 23, 0.6)` (Deep Dark with 60% opacity).
    *   **Backdrop Filter:** Blur (20px).
    *   **Border Radius:** 100px (All corners).
    *   **Border:** 1px solid `rgba(255, 255, 255, 0.1)`.
    *   **Padding:** 14px 20px.
    *   **Box Shadow:** `0 8px 32px rgba(0, 0, 0, 0.4)`.
3.  **Module Layout (Inside the Row):**
    *   **Column 1 (Logo):** Use the Code Module from Step 6.
    *   **Column 2 (Menu):** Standard Divi Menu module.
        *   *Menu Text:* Inter, Bold, Uppercase, White (Opacity 60% default, 100% hover).
        *   *Font Size:* 11px.
        *   *Letter Spacing:* 0.1em.
        *   *Active Link Color:* `#00f2ff`.
    *   **Column 3 (Button):** Standard Divi Button module.
        *   *Style:* Pill shape, Background `#00f2ff`, Text `#020617`.
        *   *Font Size:* 11px.
        *   *Padding:* 6px 16px.
        *   *CSS Class:* `nex-btn-glow`.

---

## 8. Stacking Project Cards (Scroll Effect)

To recreate the vertical stacking project cards in Divi 5:

1.  **Section Settings:**
    *   **Background:** `#020617` (Deep Dark).
    *   **Height:** Auto (The height will be determined by the number of cards).
2.  **Row Settings (The Card Container):**
    *   **Position:** Sticky (Top: 0).
    *   **Height:** 100vh (Full viewport height).
    *   **Display:** Flex (Center items).
    *   **Z-Index:** Set dynamically (Card 1 = 1, Card 2 = 2, etc.).
3.  **Card Styling (Inside the Row):**
    *   **Width:** 90% (Max Width: 1100px).
    *   **Aspect Ratio:** 16/9 (Desktop), 4/5 (Mobile).
    *   **Border Radius:** 32px (Desktop), 16px (Mobile).
    *   **Overflow:** Hidden.
    *   **Border:** 1px solid `rgba(255, 255, 255, 0.1)`.
4.  **Divi Scroll Effects (The "Stacking" Magic):**
    *   Apply these to the **Row** or the **Card Module**:
    *   **Scaling:** 
        *   Start: 80% (when entering viewport).
        *   Mid: 100% (when at center).
        *   End: 100% (stays full size as it sticks).
    *   **Opacity:**
        *   Start: 0%.
        *   Mid: 100%.
        *   End: 100%.
5.  **Mobile Optimizations:**
    *   **Padding:** Reduce inner padding to 20px on mobile.
    *   **Font Sizes:** Scale down titles to 24px and body text to 12px.
    *   **Line Clamp:** Limit description text to 3 lines on mobile to prevent overflow.
    *   **Sticky Height:** Set the row height to 80vh on mobile to ensure visibility.
6.  **Content Layout:**
    *   Use an **Image Module** as the background (set to `object-fit: cover`).
    *   Use a **Text Module** for the title and description, positioned at the bottom using Absolute positioning or Flex alignment.
    *   Add a **Button Module** with the `nex-btn-glow` class.
