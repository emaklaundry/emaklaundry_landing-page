# 📊 SEO Checklist & Optimization Guide
## Emak Laundry Website

Panduan lengkap optimasi SEO yang telah diterapkan pada website Emak Laundry.

---

## ✅ ON-PAGE SEO (Sudah Diterapkan)

### 1. **Title Tags & Meta Descriptions**
- ✅ Setiap halaman memiliki title tag unik dengan keyword target
- ✅ Title mengandung lokasi (Banjar, Tasikmalaya) dan layanan utama
- ✅ Meta description informatif 150-160 karakter dengan Call-to-Action
- ✅ Dynamic meta yang berubah sesuai halaman dan cabang

**Keyword Target Utama:**
- `laundry banjar`
- `laundry tasikmalaya`
- `laundry kiloan`
- `cuci setrika`
- `cuci karpet`
- `laundry terdekat`

### 2. **Structured Data (Schema.org)**
- ✅ Organization Schema
- ✅ LocalBusiness Schema (2 cabang: Banjar & Tasikmalaya)
- ✅ Service Schema dengan harga
- ✅ FAQ Schema dengan rich snippets
- ✅ BreadcrumbList Schema
- ✅ WebSite Schema dengan SearchAction
- ✅ AggregateRating (review rating)

### 3. **Headers & Content Structure**
- ✅ H1 tag unik per halaman
- ✅ Hierarchy H1 → H2 → H3 yang benar
- ✅ Keyword placement natural di headers
- ✅ Content informatif dengan LSI keywords

### 4. **URL Structure**
- ✅ Clean URLs tanpa parameter kompleks
- ✅ Canonical tags untuk mencegah duplicate content
- ✅ URL per cabang: `?cabang=banjar` dan `?cabang=tasikmalaya`
- ✅ SPA routing yang SEO-friendly

### 5. **Image Optimization**
- ✅ Alt text deskriptif untuk semua gambar
- ✅ SafeImage component dengan error handling
- ✅ Lazy loading untuk performa
- ✅ Aspect ratio konsisten (aspect-[3/2])

### 6. **Internal Linking**
- ✅ Navigation menu terstruktur
- ✅ Footer links ke semua halaman penting
- ✅ CTA buttons yang contextual
- ✅ Related content linking

---

## ✅ TECHNICAL SEO (Sudah Diterapkan)

### 1. **Performance Optimization**
- ✅ Code splitting dengan React.lazy
- ✅ Lazy loading untuk halaman non-critical
- ✅ Gzip compression (.htaccess)
- ✅ Browser caching headers
- ✅ Preconnect ke Google Fonts
- ✅ DNS prefetch untuk external resources

### 2. **Mobile Optimization**
- ✅ Responsive design dengan Tailwind CSS
- ✅ Mobile-first approach
- ✅ Viewport meta tag
- ✅ Touch-friendly buttons & spacing

### 3. **Sitemap & Robots.txt**
- ✅ XML Sitemap dengan semua halaman
- ✅ Sitemap per cabang
- ✅ robots.txt yang mengizinkan crawling
- ✅ Sitemap URL di robots.txt

### 4. **Security & HTTPS**
- ✅ Force HTTPS redirect (.htaccess)
- ✅ Security headers (X-Frame-Options, XSS Protection)
- ✅ API key protection (serverless proxy)

### 5. **Crawlability**
- ✅ Clean HTML structure
- ✅ No render-blocking resources
- ✅ Accessible content tanpa JavaScript
- ✅ SPA fallback ke index.html (.htaccess)

---

## ✅ LOCAL SEO (Sudah Diterapkan)

### 1. **Google My Business Integration**
- ✅ LocalBusiness Schema dengan alamat lengkap
- ✅ Geo meta tags (latitude, longitude)
- ✅ NAP (Name, Address, Phone) consistency
- ✅ Jam operasional di Schema
- ✅ Google Maps embed di website

### 2. **Location-Based Keywords**
- ✅ "laundry banjar" di title & content
- ✅ "laundry tasikmalaya" di title & content
- ✅ Alamat lengkap di footer
- ✅ Area served mentioned

### 3. **Multi-Location Strategy**
- ✅ Separate data untuk 2 cabang
- ✅ URL parameter per cabang
- ✅ Unique content per lokasi
- ✅ Contact info per cabang

---

## ✅ SOCIAL MEDIA & SHARING (Sudah Diterapkan)

### 1. **Open Graph Tags**
- ✅ og:title, og:description, og:image
- ✅ og:type = website
- ✅ og:locale = id_ID
- ✅ Business contact data tags
- ✅ Image dimensions specified

### 2. **Twitter Cards**
- ✅ twitter:card = summary_large_image
- ✅ twitter:title & twitter:description
- ✅ twitter:image dengan alt text

### 3. **Social Profiles**
- ✅ Instagram & Facebook links
- ✅ WhatsApp integration
- ✅ sameAs property di Schema

---

## 📋 POST-DEPLOYMENT CHECKLIST (MANUAL)

### 1. **Google Search Console Setup**
- [ ] Verify website ownership
- [ ] Submit sitemap.xml
- [ ] Monitor index coverage
- [ ] Check mobile usability
- [ ] Fix any crawl errors

### 2. **Google My Business**
- [ ] Claim & verify Banjar location
- [ ] Claim & verify Tasikmalaya location
- [ ] Add photos (interior, exterior, products)
- [ ] Add business hours
- [ ] Add services & pricing
- [ ] Encourage customer reviews

### 3. **Google Analytics Setup**
- [ ] Create GA4 property
- [ ] Add tracking code to `index.html`
- [ ] Set up goals & conversions
- [ ] Track WhatsApp clicks
- [ ] Monitor user behavior

### 4. **Bing Webmaster Tools**
- [ ] Verify website
- [ ] Submit sitemap
- [ ] Monitor indexing

### 5. **Social Media Optimization**
- [ ] Post regularly di Instagram (@emaklaundry12)
- [ ] Update Facebook page
- [ ] Add website link di bio Instagram
- [ ] Create Google Posts (via GMB)

---

## 🎯 KEYWORD STRATEGY

### Primary Keywords (High Priority)
1. `laundry banjar` → Volume: Medium, Competition: Low
2. `laundry tasikmalaya` → Volume: Medium, Competition: Low
3. `laundry kiloan banjar` → Volume: Low, Competition: Low
4. `cuci setrika banjar` → Volume: Low, Competition: Low
5. `laundry terdekat` → Volume: High, Competition: High (+ location)

### Secondary Keywords
- `cuci karpet banjar`
- `cuci sepatu tasikmalaya`
- `laundry murah banjar`
- `laundry ekspres tasikmalaya`
- `antar jemput laundry`
- `cuci boneka banjar`

### Long-tail Keywords
- `laundry kiloan terdekat di banjar`
- `harga laundry per kilo tasikmalaya`
- `laundry cuci setrika banjar murah`
- `jasa cuci karpet tasikmalaya`

---

## 📈 MONITORING & IMPROVEMENT

### Weekly Tasks
- [ ] Check Google Search Console for errors
- [ ] Monitor ranking untuk keyword utama
- [ ] Respond to Google My Business reviews
- [ ] Post content di social media

### Monthly Tasks
- [ ] Analyze Google Analytics traffic
- [ ] Update blog/news (jika ada)
- [ ] Check & fix broken links
- [ ] Review & update meta descriptions
- [ ] Competitor analysis

### Quarterly Tasks
- [ ] Comprehensive SEO audit
- [ ] Update pricing if changed
- [ ] Refresh testimonials
- [ ] Add new services to Schema
- [ ] Backlink analysis & outreach

---

## 🔧 TOOLS YANG DIREKOMENDASIKAN

### Free Tools
- **Google Search Console** - Monitor indexing & performance
- **Google Analytics** - Track traffic & behavior
- **Google PageSpeed Insights** - Measure performance
- **Google My Business** - Local SEO management
- **Bing Webmaster Tools** - Additional search visibility

### Paid Tools (Opsional)
- **Ahrefs** atau **SEMrush** - Keyword research & competitor analysis
- **Ubersuggest** - Affordable keyword tool
- **Screaming Frog** - Technical SEO audit

---

## 📞 CONVERSION OPTIMIZATION TIPS

### Call-to-Action (CTA) Best Practices
1. ✅ WhatsApp button always visible (FloatingWhatsApp)
2. ✅ Multiple CTAs per page
3. ✅ Clear value proposition
4. ✅ Trust signals (testimonials, ratings)
5. ✅ Mobile-optimized contact buttons

### Trust Building Elements
- ✅ Customer testimonials with names & roles
- ✅ Operating hours prominently displayed
- ✅ Transparent pricing
- ✅ Professional photos (when uploaded)
- ✅ Social proof (mitra/partners)

---

## 🚀 QUICK WINS (Implementasi Langsung)

1. **Upload Foto Berkualitas Tinggi**
   - Interior outlet
   - Mesin cuci modern
   - Pakaian hasil laundry
   - Tim kerja
   - → Semua dengan alt text SEO-friendly

2. **Dapatkan Review Google**
   - Minta pelanggan setia review di GMB
   - Target: 20+ reviews dengan rating 4.5+
   - Balas setiap review dengan profesional

3. **Backlink Building**
   - List di direktori bisnis lokal (Yellow Pages, Tokopedia, dll)
   - Partner dengan komunitas lokal
   - Guest post di blog lokal Banjar/Tasik

4. **Content Marketing**
   - Buat blog tentang tips perawatan pakaian
   - Video tutorial "Cara Menghilangkan Noda"
   - Share di social media

---

## 📝 NOTES

- **Domain Production**: `https://www.emaklaundry.my.id/` (Vercel hosting) ✅
- **Hosting Platform**: Vercel
  - Automatic HTTPS ✅
  - Global CDN ✅
  - Serverless Functions ready (`/api/ask-emak.js`) ✅
  - Environment Variables: Set `GEMINI_API_KEY` di Vercel Dashboard

- **Image Assets**: Upload gambar ke `public/image/` dan favicon ke `public/fav-icon/`

- **API Key**: Set `GEMINI_API_KEY` di Vercel Environment Variables:
  1. Go to: https://vercel.com/your-team/emaklaundry-landing-page/settings/environment-variables
  2. Add: `GEMINI_API_KEY` = your_new_rotated_key
  3. Redeploy after adding env var

---

**Last Updated:** 7 November 2025  
**Domain:** https://www.emaklaundry.my.id/  
**SEO Score Target:** 90+ (Google PageSpeed Insights)  
**Estimated Time to Rank:** 2-4 minggu untuk keyword lokal low competition
