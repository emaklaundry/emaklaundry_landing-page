# 📱 Mobile Optimization Guide

## Overview
Emak Laundry Landing Page telah dioptimasi untuk performa mobile terbaik dengan fokus pada:
- Touch-friendly interface
- Responsive typography
- Better mobile navigation
- Performance optimization
- Accessibility

## 🎯 Key Mobile Optimizations

### 1. **Viewport & Meta Tags**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
<meta name="theme-color" content="#B740B7">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

**Benefit:**
- Better control over zoom behavior
- Native app-like experience
- Support for notched devices (safe area insets)
- Custom theme color di browser mobile

### 2. **Touch Targets (Min 44px)**
Semua interactive elements (buttons, links, inputs) memiliki minimal height 44px sesuai Apple & Google guidelines.

**Implemented in:**
- ✅ Navigation buttons
- ✅ CTA buttons (Hero, Pricing)
- ✅ Form inputs
- ✅ Mobile menu items
- ✅ WhatsApp floating button

### 3. **Responsive Typography**

#### Hero Section
```tsx
// Mobile-first approach
text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
```

**Scaling:**
- Mobile (< 640px): 30px
- Small tablet (640px+): 36px
- Tablet (768px+): 48px
- Desktop (1024px+): 60px
- Large (1280px+): 72px

#### Body Text
```tsx
text-base sm:text-lg md:text-xl
```

### 4. **Mobile Navigation**

#### Features:
- ✅ Hamburger menu dengan smooth animation
- ✅ Larger touch targets (w-7 h-7 instead of w-6 h-6)
- ✅ Better visual feedback (`active:scale-95`)
- ✅ Prevent body scroll ketika menu open
- ✅ Auto-close after navigation

#### Implementation:
```tsx
// Better touch feedback
className="p-2 -mr-2 active:scale-95 transition-transform"
```

### 5. **Form Inputs**

#### Auto-prevention of iOS Zoom
```css
input, textarea, select {
    font-size: 16px !important; /* Prevents zoom on focus */
}
```

**Why 16px?**
iOS akan auto-zoom jika font size < 16px saat focus input.

### 6. **Safe Area Insets**

Support untuk device dengan notch (iPhone X+):

```css
@supports (padding: env(safe-area-inset-bottom)) {
    body {
        padding-bottom: env(safe-area-inset-bottom);
    }
}
```

**WhatsApp Button:**
```tsx
style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
```

### 7. **Performance Optimizations**

#### Smooth Scrolling
```css
-webkit-overflow-scrolling: touch; /* iOS momentum scrolling */
```

#### Tap Highlight Removal
```css
* {
    -webkit-tap-highlight-color: transparent;
}
```

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### 8. **Responsive Spacing**

#### Container Padding
```tsx
// Mobile: 16px (px-4)
// Desktop: 24px (px-6)
className="container mx-auto px-4 sm:px-6"
```

#### Section Padding
```tsx
// Mobile: 48px vertical
// Desktop: 80px vertical
className="py-12 sm:py-16 md:py-20"
```

### 9. **Mobile-Optimized Components**

#### Pricing Cards
- Mobile: Full width cards dengan reduced padding
- Tablet+: Grid layout
```tsx
className="p-6 sm:p-8" // Mobile: 24px, Desktop: 32px
```

#### Hero Buttons
```tsx
// Stack vertical di mobile, horizontal di desktop
className="flex flex-col sm:flex-row gap-3 sm:gap-4"
```

#### Stats Section
```tsx
// Tighter spacing di mobile
className="grid grid-cols-3 gap-2 sm:gap-4"
```

## 🧪 Testing Checklist

### Mobile Devices to Test:
- [ ] iPhone SE (375px) - Smallest modern iPhone
- [ ] iPhone 12/13/14 (390px) - Standard
- [ ] iPhone 14 Pro Max (430px) - Large
- [ ] Samsung Galaxy S21 (360px) - Android
- [ ] iPad Mini (744px) - Small tablet

### Features to Verify:
- [ ] Touch targets are easy to tap (no mis-taps)
- [ ] No horizontal scrolling
- [ ] Text is readable without zoom
- [ ] Forms don't trigger zoom on iOS
- [ ] Navigation menu works smoothly
- [ ] WhatsApp button doesn't cover content
- [ ] All interactive elements have visual feedback
- [ ] Images load quickly
- [ ] Animations are smooth (60fps)

## 📊 Performance Metrics

### Target Goals:
- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.8s
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Input Delay (FID):** < 100ms

### Tools:
```bash
# Lighthouse mobile audit
npx lighthouse https://www.emaklaundry.my.id --view --preset=mobile

# PageSpeed Insights
# Visit: https://pagespeed.web.dev/
```

## 🛠️ Development Tips

### 1. **Use Mobile-First Approach**
```tsx
// ✅ Good
className="text-sm sm:text-base md:text-lg"

// ❌ Bad
className="text-lg md:text-sm"
```

### 2. **Test on Real Devices**
Emulator tidak selalu akurat untuk:
- Touch responsiveness
- Scroll performance
- Form behavior

### 3. **Use Chrome DevTools**
```
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select device or custom dimensions
4. Test touch events
```

### 4. **Monitor Bundle Size**
```bash
npm run build
# Check dist/ folder size
# Target: < 500KB total bundle
```

## 📱 Mobile-Specific CSS

```css
/* Added to index.css */

/* Larger touch targets */
@media (max-width: 640px) {
    button, a {
        min-height: 44px;
    }
}

/* Prevent zoom on input focus */
input, textarea, select {
    font-size: 16px !important;
}

/* Better scrolling */
body {
    -webkit-overflow-scrolling: touch;
}

/* Safe area insets */
@supports (padding: env(safe-area-inset-bottom)) {
    body {
        padding-bottom: env(safe-area-inset-bottom);
    }
}
```

## 🎨 Tailwind Utilities

Custom utilities added for mobile:

```javascript
// tailwind.config.js
spacing: {
    'safe-top': 'env(safe-area-inset-top)',
    'safe-bottom': 'env(safe-area-inset-bottom)',
    'safe-left': 'env(safe-area-inset-left)',
    'safe-right': 'env(safe-area-inset-right)',
}
```

Usage:
```tsx
className="pb-safe-bottom" // Respects notch/home indicator
```

## 🚀 Deployment

Pastikan server/CDN mendukung:
- ✅ Brotli/Gzip compression
- ✅ HTTP/2 or HTTP/3
- ✅ Image optimization
- ✅ Cache headers

## 📞 Support

Jika ada issue dengan mobile optimization:
1. Check browser console untuk errors
2. Test di Chrome DevTools mobile emulator
3. Verify viewport meta tag
4. Clear browser cache
5. Test di real device

---

**Last Updated:** December 2025
**Version:** 1.0.3
