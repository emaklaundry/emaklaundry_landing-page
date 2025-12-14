import React from "react";
import { Helmet } from "react-helmet-async";
import { CONTACT_INFO } from "../config/constants";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  // Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LaundryService",
    name: "Emak Laundry",
    image: "https://www.emaklaundry.my.id/logo.png",
    "@id": "https://www.emaklaundry.my.id",
    url: "https://www.emaklaundry.my.id",
    telephone: "+6285175279659",
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Dr. Sudarsono No.43",
      addressLocality: "Banjar",
      addressRegion: "Jawa Barat",
      postalCode: "46321",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.3669,
      longitude: 108.5365,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    priceRange: "Rp 5.000 - Rp 150.000",
    description: description,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://www.emaklaundry.my.id/logo.png"
      />
      <meta
        property="og:url"
        content={canonical || "https://www.emaklaundry.my.id"}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.emaklaundry.my.id/logo.png"
      />
      {canonical && <link rel="canonical" href={canonical} />}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
