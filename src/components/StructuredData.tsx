const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Эмпатия",
    "alternateName": "Empathy Psychology Center",
    "url": "https://www.empathy.kz/",
    "logo": "https://www.empathy.kz/favicon.ico",
    "description": "Квалифицированные психологи и психотерапевты в Казахстане. КПТ-терапия онлайн и оффлайн в Астане и Алматы.",
    "telephone": "+77715738204",
    "email": "empathy.kz@gmail.com",
    "priceRange": "₸₸",
    "areaServed": [
      {
        "@type": "City",
        "name": "Астана"
      },
      {
        "@type": "City",
        "name": "Алматы"
      },
      {
        "@type": "Country",
        "name": "Казахстан"
      }
    ],
    "serviceType": [
      "Психологическое консультирование",
      "Психотерапия",
      "КПТ терапия",
      "Когнитивно-поведенческая терапия",
      "Семейная терапия",
      "Детская психология"
    ],
    "founder": {
      "@type": "Person",
      "name": "Таулан Аманжолов"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+77715738204",
        "contactType": "customer service",
        "areaServed": "KZ",
        "availableLanguage": ["Russian", "Kazakh"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+77055590147",
        "contactType": "customer service",
        "areaServed": "KZ",
        "availableLanguage": ["Russian", "Kazakh"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Кайрата Рыскулбекова, д. 16",
      "addressLocality": "Астана",
      "addressCountry": "KZ"
    },
    "sameAs": [
      "https://www.instagram.com/empathy.psy/",
      "https://t.me/Iamtaulan",
      "https://wa.me/77715738204"
    ]
  };

  const localBusinessSchemaAstana = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Эмпатия - Психологический центр в Астане",
    "image": "https://www.empathy.kz/psyche1.png",
    "telephone": "+77715738204",
    "email": "empathy.kz@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Кайрата Рыскулбекова, д. 16",
      "addressLocality": "Астана",
      "addressCountry": "KZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.1694",
      "longitude": "71.4491"
    },
    "url": "https://www.empathy.kz/",
    "priceRange": "₸₸",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ]
  };

  const localBusinessSchemaAlmaty = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Эмпатия - Психологический центр в Алматы",
    "image": "https://www.empathy.kz/psyche2.png",
    "telephone": "+77715738204",
    "email": "empathy.kz@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Алматы",
      "addressCountry": "KZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.2220",
      "longitude": "76.8512"
    },
    "url": "https://www.empathy.kz/",
    "priceRange": "₸₸"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchemaAstana) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchemaAlmaty) }}
      />
    </>
  );
};

export default StructuredData;

