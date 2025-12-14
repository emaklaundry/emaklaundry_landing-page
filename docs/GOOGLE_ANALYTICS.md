# Panduan Konfigurasi Google Analytics 4 (GA4)

Dokumen ini berisi langkah-langkah lengkap untuk mengintegrasikan website Emak Laundry dengan Google Analytics 4 untuk tracking pengunjung, behavior analysis, dan conversion monitoring.

## Daftar Isi

1. [Persyaratan](#persyaratan)
2. [Membuat Property GA4](#membuat-property-ga4)
3. [Instalasi Tracking Code](#instalasi-tracking-code)
4. [Konfigurasi Events dan Conversions](#konfigurasi-events-dan-conversions)
5. [Enhanced Measurement](#enhanced-measurement)
6. [Custom Events](#custom-events)
7. [Monitoring dan Reports](#monitoring-dan-reports)
8. [Troubleshooting](#troubleshooting)

## Persyaratan

- Akun Google (Gmail)
- Website sudah deploy dan dapat diakses publik
- Akses ke source code untuk implementasi tracking

## Membuat Property GA4

### 1. Setup Akun Google Analytics

1. **Buka Google Analytics**

   - Kunjungi: https://analytics.google.com/
   - Login dengan akun Google Anda

2. **Buat Akun Baru** (jika belum punya)

   - Klik **"Start measuring"** atau **"Admin"** (ikon gear)
   - Klik **"Create Account"**
   - Isi informasi:
     - Account name: `Emak Laundry`
     - Centang data sharing settings sesuai preferensi
   - Klik **"Next"**

3. **Buat Property**

   - Property name: `Emak Laundry Website`
   - Reporting time zone: `(GMT+07:00) Jakarta`
   - Currency: `Indonesian Rupiah (IDR)`
   - Klik **"Next"**

4. **Business Information**

   - Industry category: `Home & Garden` atau `Business Services`
   - Business size: Pilih sesuai ukuran bisnis
   - Usage: Centang yang relevan (e.g., `Measure customer engagement`)
   - Klik **"Create"**

5. **Accept Terms of Service**
   - Baca dan terima Google Analytics Terms of Service
   - Klik **"I Accept"**

### 2. Setup Data Stream

1. **Pilih Platform: Web**
   - Klik **"Web"** untuk website
2. **Isi Data Stream Details**

   - Website URL: `https://emaklaundry.com`
   - Stream name: `Emak Laundry Production`
   - **Enhanced measurement**: Toggle ON (recommended)
   - Klik **"Create stream"**

3. **Dapatkan Measurement ID**
   - Setelah stream dibuat, Anda akan mendapat **Measurement ID**
   - Format: `G-XXXXXXXXXX`
   - **SIMPAN ID INI** untuk implementasi

## Instalasi Tracking Code

### Metode 1: Google Tag (gtag.js) - Recommended

#### 1. Install React Google Analytics Library

```bash
npm install react-ga4
```

#### 2. Buat GA4 Configuration File

Buat file baru: `src/config/analytics.ts`

```typescript
import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-XXXXXXXXXX"; // Ganti dengan Measurement ID Anda

export const initGA = () => {
  if (typeof window !== "undefined") {
    ReactGA.initialize(MEASUREMENT_ID, {
      gaOptions: {
        anonymizeIp: true, // GDPR compliance
        cookieFlags: "SameSite=None;Secure",
      },
      gtagOptions: {
        send_page_view: false, // Kita akan manual trigger page views
      },
    });
  }
};

export const logPageView = (path: string, title: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: title,
  });
};

export const logEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

export const logButtonClick = (buttonName: string, location: string) => {
  ReactGA.event({
    category: "Button",
    action: "Click",
    label: `${buttonName} - ${location}`,
  });
};

export const logFormSubmit = (formName: string, success: boolean) => {
  ReactGA.event({
    category: "Form",
    action: success ? "Submit Success" : "Submit Failed",
    label: formName,
  });
};

export const logWhatsAppClick = (source: string) => {
  ReactGA.event({
    category: "Contact",
    action: "WhatsApp Click",
    label: source,
  });
};

export const logServiceView = (serviceName: string) => {
  ReactGA.event({
    category: "Service",
    action: "View",
    label: serviceName,
  });
};

export const logTrackingSearch = (invoiceNumber: string, found: boolean) => {
  ReactGA.event({
    category: "Tracking",
    action: found ? "Search Success" : "Search Not Found",
    label: invoiceNumber,
  });
};
```

#### 3. Initialize GA4 di App Component

Edit file: `src/App.tsx`

```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, logPageView } from "./config/analytics";

function App() {
  const location = useLocation();

  // Initialize GA4 on app mount
  useEffect(() => {
    initGA();
  }, []);

  // Track page views on route change
  useEffect(() => {
    const path = location.pathname + location.search + location.hash;
    const title = document.title;
    logPageView(path, title);
  }, [location]);

  // ... rest of your App component
}
```

### Metode 2: Google Tag Manager (GTM) - Advanced

#### 1. Buat GTM Container

1. Buka: https://tagmanager.google.com/
2. Create Account: `Emak Laundry`
3. Create Container: `Emak Laundry Website` (Web)
4. Dapatkan GTM ID: `GTM-XXXXXXX`

#### 2. Install GTM Script

Edit file: `index.html`

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <!-- Google Tag Manager -->
    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-XXXXXXX");
    </script>
    <!-- End Google Tag Manager -->

    <meta charset="UTF-8" />
    <!-- ... rest of head -->
  </head>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div id="root"></div>
    <!-- ... rest of body -->
  </body>
</html>
```

#### 3. Configure GA4 Tag di GTM

1. Di GTM Dashboard, buat **New Tag**
2. Tag Configuration: **Google Analytics: GA4 Configuration**
3. Measurement ID: `G-XXXXXXXXXX`
4. Triggering: **All Pages**
5. Save dan **Submit** container

## Konfigurasi Events dan Conversions

### 1. Track WhatsApp Button Clicks

Edit file: `src/components/WhatsAppButton.tsx`

```typescript
import { logWhatsAppClick } from "../config/analytics";

const handleWhatsAppClick = () => {
  logWhatsAppClick("Floating Button");
  window.open(whatsappUrl, "_blank");
};
```

Edit file: `src/components/Hero.tsx`

```typescript
import { logWhatsAppClick } from '../config/analytics';

// Di dalam komponen
<a
  href={SOCIAL_LINKS.whatsapp}
  onClick={() => logWhatsAppClick('Hero CTA')}
  // ... rest of props
>
```

### 2. Track Form Submissions

Edit file: `src/components/TrackLaundry.tsx`

```typescript
import { logFormSubmit, logTrackingSearch } from "../config/analytics";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const { data, error } = await supabase.rpc("get_laundry_status", {
      invoice_no: invoiceNumber,
    });

    if (error) throw error;

    if (data && data.length > 0) {
      setLaundryStatus(data[0]);
      logFormSubmit("Track Laundry", true);
      logTrackingSearch(invoiceNumber, true);
    } else {
      setError("Nomor invoice tidak ditemukan");
      logTrackingSearch(invoiceNumber, false);
    }
  } catch (err) {
    logFormSubmit("Track Laundry", false);
    setError("Terjadi kesalahan...");
  } finally {
    setIsLoading(false);
  }
};
```

### 3. Track Service Views

Edit file: `src/components/Services.tsx`

```typescript
import { logServiceView } from "../config/analytics";

const handleServiceClick = (serviceName: string) => {
  logServiceView(serviceName);
  // ... rest of service click logic
};
```

### 4. Track Navigation Clicks

Edit file: `src/components/Header.tsx`

```typescript
import { logButtonClick } from "../config/analytics";

const handleNavClick = (sectionName: string) => {
  logButtonClick(`Nav - ${sectionName}`, "Header");
  // ... rest of navigation logic
};
```

## Enhanced Measurement

Enhanced Measurement sudah diaktifkan saat setup Data Stream. Features yang ter-track otomatis:

### Events yang Ter-track Otomatis:

1. **page_view** - Setiap halaman dikunjungi
2. **scroll** - User scroll hingga 90% halaman
3. **click** - Outbound link clicks
4. **view_search_results** - Internal site search
5. **video_start/complete** - Jika ada video
6. **file_download** - Download file (PDF, etc.)

### Customize Enhanced Measurement:

1. Di GA4, buka **Admin** > **Data Streams**
2. Klik stream Anda > **Enhanced measurement**
3. Toggle ON/OFF events sesuai kebutuhan:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Form interactions
   - ⬜ Video engagement (jika tidak ada video)
   - ⬜ File downloads

## Custom Events

### Recommended Events untuk Laundry Business:

```typescript
// src/config/analytics.ts - Tambahkan functions berikut:

// Track ketika user melihat pricing
export const logPricingView = (serviceName: string, price: string) => {
  ReactGA.event({
    category: "Pricing",
    action: "View Price",
    label: serviceName,
    value: parseInt(price.replace(/\D/g, "")), // Convert "Rp 10.000" to 10000
  });
};

// Track FAQ interactions
export const logFAQClick = (question: string) => {
  ReactGA.event({
    category: "FAQ",
    action: "Question Clicked",
    label: question,
  });
};

// Track AI Chatbot usage
export const logChatbotInteraction = (query: string, hasResponse: boolean) => {
  ReactGA.event({
    category: "Chatbot",
    action: hasResponse ? "Response Generated" : "Response Failed",
    label: query,
  });
};

// Track theme changes
export const logThemeChange = (theme: string) => {
  ReactGA.event({
    category: "UI",
    action: "Theme Change",
    label: theme,
  });
};

// Track location/map interactions
export const logMapInteraction = (action: string) => {
  ReactGA.event({
    category: "Location",
    action: action, // 'View Map', 'Get Directions', etc.
  });
};
```

## Setup Conversions

### 1. Mark Events as Conversions

Di GA4 Dashboard:

1. Buka **Admin** > **Events**
2. Tunggu hingga events muncul (24-48 jam setelah implementasi)
3. Toggle **Mark as conversion** untuk events penting:
   - `submit_success` (Form submission berhasil)
   - `whatsapp_click` (Click tombol WhatsApp)
   - `track_search_success` (Tracking berhasil)
   - `pricing_view` (Melihat harga)

### 2. Create Custom Conversions

1. Buka **Admin** > **Conversions**
2. Klik **New conversion event**
3. Contoh custom conversion:
   - Event name: `qualified_lead`
   - Conditions: User yang view pricing DAN click WhatsApp dalam 1 session

## Monitoring dan Reports

### 1. Real-time Report

**Access:** GA4 Dashboard > Reports > Realtime

**Monitor:**

- Users saat ini di website
- Page views per detik
- Events yang terjadi
- Traffic sources
- Geographic location

### 2. Acquisition Report

**Path:** Reports > Acquisition > Traffic acquisition

**Metrics:**

- **Organic Search**: Traffic dari Google/Bing
- **Direct**: User ketik URL langsung
- **Referral**: Dari website lain
- **Social**: Dari Instagram, Facebook, dll
- **(not set)**: Unknown sources

**Action:**

- Fokus pada channel dengan conversion rate tertinggi
- Optimize SEO untuk organic search
- Track campaign dengan UTM parameters

### 3. Engagement Report

**Path:** Reports > Engagement > Pages and screens

**Monitor:**

- Most viewed pages
- Average engagement time
- Bounce rate
- Scroll depth

**Optimize:**

- Improve content pada pages dengan high bounce rate
- Enhance CTA di high-traffic pages

### 4. Conversions Report

**Path:** Reports > Engagement > Conversions

**Track:**

- Conversion count per event
- Conversion rate
- Revenue (jika e-commerce enabled)

### 5. Custom Reports dengan Explorations

1. Buka **Explore** di sidebar
2. Create **New Exploration**
3. Templates tersedia:
   - **Free form**: Custom dimensions & metrics
   - **Funnel exploration**: User journey analysis
   - **Path exploration**: Navigation patterns
   - **Segment overlap**: User segment analysis

## UTM Campaign Tracking

### Generate UTM Links untuk Marketing Campaigns

**Format:**

```
https://emaklaundry.com?utm_source=instagram&utm_medium=social&utm_campaign=promo_lebaran
```

**Parameters:**

- `utm_source`: Platform (instagram, facebook, google)
- `utm_medium`: Media type (social, email, cpc)
- `utm_campaign`: Campaign name (promo_lebaran, grand_opening)
- `utm_term`: Keyword (optional)
- `utm_content`: Ad variation (optional)

**Tools:**

- Google Campaign URL Builder: https://ga-dev-tools.google/campaign-url-builder/

**Usage Example:**

```
Instagram Story Promo:
https://emaklaundry.com?utm_source=instagram&utm_medium=story&utm_campaign=discount_weekend&utm_content=story1

Facebook Ads:
https://emaklaundry.com?utm_source=facebook&utm_medium=cpc&utm_campaign=new_customer_promo&utm_content=ad_variant_a
```

## Troubleshooting

### Masalah: Data Tidak Muncul di GA4

**Solusi:**

1. Cek Measurement ID sudah benar di code
2. Test dengan **DebugView**:

   - Install Chrome extension: **Google Analytics Debugger**
   - Atau tambahkan `?debug_mode=true` di URL
   - Buka GA4 > Admin > DebugView
   - Refresh website, lihat real-time events

3. Cek browser console untuk errors
4. Pastikan ad blocker dimatikan saat testing
5. Tunggu 24-48 jam untuk data muncul di reports

### Masalah: Events Tidak Ter-track

**Solusi:**

1. Verify event name dan parameters di code
2. Cek network tab: request ke `google-analytics.com/g/collect`
3. Test events di DebugView
4. Pastikan `initGA()` dipanggil sebelum event logging

### Masalah: High Bounce Rate

**Analisa:**

- Bounce rate normal: 40-60%
- Jika > 70%: Ada masalah UX/content
- Jika < 20%: Kemungkinan double-tracking

**Solusi:**

- Improve page loading speed
- Enhance content relevance
- Add clear CTAs
- Fix mobile usability issues

### Masalah: Spam Referral Traffic

**Solusi:**

1. Buka **Admin** > **Data Settings** > **Data Filters**
2. Create filter: **Exclude Internal Traffic**
3. Define internal IP ranges
4. Create filter: **Exclude Known Bots**

## Privacy dan GDPR Compliance

### 1. Cookie Consent

Implementasi cookie consent banner (recommended):

```typescript
// src/components/CookieConsent.tsx
import { useState, useEffect } from "react";
import { initGA } from "../config/analytics";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      initGA(); // Initialize GA only if consent given
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    initGA();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Kami menggunakan cookies untuk meningkatkan pengalaman Anda.
          <a href="#privacy" className="underline ml-1">
            Pelajari lebih lanjut
          </a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
          >
            Tolak
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Terima
          </button>
        </div>
      </div>
    </div>
  );
};
```

### 2. IP Anonymization

Sudah configured di `analytics.ts`:

```typescript
gaOptions: {
  anonymizeIp: true, // GDPR compliance
}
```

### 3. Data Retention

Di GA4 Dashboard:

1. **Admin** > **Data Settings** > **Data Retention**
2. Set retention period: **14 months** (recommended)
3. Reset user data on new activity: **ON**

## Best Practices

1. **Regular Monitoring**

   - Cek reports minimal 1x per minggu
   - Set up custom alerts untuk conversion drops

2. **A/B Testing**

   - Test different CTA buttons
   - Experiment dengan headline variations
   - Track results di GA4 Explorations

3. **Mobile Analytics**

   - 60%+ traffic biasanya dari mobile
   - Monitor mobile vs desktop conversion rates
   - Optimize untuk mobile-first

4. **Event Naming Convention**

   - Gunakan lowercase dan underscore: `button_click`
   - Consistent categories: `Contact`, `Form`, `Service`
   - Descriptive labels: `WhatsApp - Hero CTA`

5. **Documentation**
   - Document semua custom events
   - Maintain tracking plan spreadsheet
   - Update team ketika ada perubahan tracking

## Integration dengan Google Ads (Optional)

Jika menjalankan Google Ads campaigns:

1. **Link GA4 dengan Google Ads**

   - GA4 Admin > Product Links > Google Ads Links
   - Link akun Google Ads Anda

2. **Import Conversions ke Google Ads**

   - Pilih conversions yang relevan
   - Optimize ads berdasarkan conversion data

3. **Audience Export**
   - Create audiences di GA4
   - Export ke Google Ads untuk remarketing

## Resources

- **GA4 Documentation**: https://support.google.com/analytics/answer/10089681
- **GA4 Event Reference**: https://developers.google.com/analytics/devguides/collection/ga4/reference/events
- **GA4 Dimensions & Metrics**: https://ga-dev-tools.google/ga4/dimensions-metrics-explorer/
- **UTM Builder**: https://ga-dev-tools.google/campaign-url-builder/
- **DebugView Guide**: https://support.google.com/analytics/answer/7201382

## Kesimpulan

Dengan Google Analytics 4 terkonfigurasi dengan baik, Anda dapat:

- ✅ Track semua user interactions secara detail
- ✅ Understand user behavior dan preferences
- ✅ Measure marketing campaign effectiveness
- ✅ Optimize conversion funnel
- ✅ Make data-driven business decisions

**Next Steps:**

1. Install react-ga4: `npm install react-ga4`
2. Dapatkan Measurement ID dari GA4
3. Implementasi tracking code
4. Deploy dan test dengan DebugView
5. Setup conversions
6. Monitor reports dan optimize

---

_Terakhir diupdate: Desember 2025_
