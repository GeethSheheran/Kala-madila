export const siteUrl = "https://kalamandila.com";

export const seoKeywords = [
  "Sri Lankan wedding experience",
  "Sri Lanka cultural experience",
  "traditional Sri Lankan wedding",
];

export const homeDescription =
  "Experience a traditional Sri Lankan wedding with bride and groom dressing, Poruwa ceremony, dancing, and professional photoshoot. A unique cultural experience in Sri Lanka.";

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Kala Mandila",
  description:
    "Sri Lankan wedding experience for tourists with Poruwa ceremony, traditional dressing, dancing and photography.",
  url: siteUrl,
  image: `${siteUrl}/hero-bg.png`,
  touristType: ["Couples", "Travelers", "Cultural experience seekers"],
  keywords: seoKeywords.join(", "),
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 27/1, Jayanthi Road, Dadalla",
    addressLocality: "Galle",
    addressCountry: "LK",
  },
  telephone: "+94769413002",
  email: "hello@kalamandila.com",
};

export const experienceJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "The Kala Mandila Experience",
  description:
    "A Sri Lankan wedding experience for tourists featuring traditional Kandyan dressing, Poruwa ceremony, live performances and professional photography.",
  url: `${siteUrl}/experience`,
  image: `${siteUrl}/hero-bg.png`,
  provider: {
    "@type": "LocalBusiness",
    name: "Kala Mandila",
    url: siteUrl,
  },
  touristType: ["Couples", "Travelers"],
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      "Traditional Kandyan bride and groom dressing",
      "Poruwa ceremony",
      "Traditional Sri Lankan dancing and drumming",
      "Professional cultural photoshoot",
    ],
  },
};
