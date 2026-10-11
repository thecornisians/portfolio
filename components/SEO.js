import Head from "next/head";

const DEFAULT_META = {
  title: "Cornelius Owusu-Ansah — Software Engineer & Founder",
  description:
    "Cornelius Owusu-Ansah is a Ghanaian software engineer, product builder, and co-founder based in Accra. Specializing in full-stack engineering, scalable architecture, and digital products.",
  keywords:
    "Cornelius Owusu-Ansah, software engineer, product builder, founder, Gaderin, full stack developer, React, Next.js, Node.js, Accra Ghana, web development, engineering",
  siteUrl: "https://thecornisians.com",
  defaultImage: "/corneliusportfolio.png",
  twitterHandle: "@thecornisians",
};

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  publishedTime,
  structuredData,
}) {
  const metaTitle = title
    ? title.includes("Cornelius")
      ? title
      : `${title} | Cornelius Owusu-Ansah`
    : DEFAULT_META.title;

  const metaDesc = description || DEFAULT_META.description;
  const metaKeywords = keywords || DEFAULT_META.keywords;
  const canonicalUrl = canonical
    ? `${DEFAULT_META.siteUrl}${canonical}`
    : DEFAULT_META.siteUrl;
  const metaImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${DEFAULT_META.siteUrl}${ogImage}`
    : `${DEFAULT_META.siteUrl}${DEFAULT_META.defaultImage}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${DEFAULT_META.siteUrl}/#person`,
        name: "Cornelius Owusu-Ansah",
        url: DEFAULT_META.siteUrl,
        image: `${DEFAULT_META.siteUrl}/portfolio-headshot.jpg`,
        jobTitle: "Software Engineer & Founder",
        worksFor: {
          "@type": "Organization",
          name: "Gaderin",
          url: "https://www.thegaderin.com",
        },
        sameAs: [
          "https://github.com/thecornisians",
          "https://twitter.com/thecornisians",
          "https://www.linkedin.com/in/corneliusoa/",
          "https://cowans.substack.com",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${DEFAULT_META.siteUrl}/#website`,
        url: DEFAULT_META.siteUrl,
        name: "Cornelius Owusu-Ansah",
        description: DEFAULT_META.description,
        publisher: {
          "@id": `${DEFAULT_META.siteUrl}/#person`,
        },
      },
    ],
  };

  const jsonLdData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Cornelius Owusu-Ansah" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Theme & Icons */}
      <meta name="theme-color" content="#050505" />
      <meta name="color-scheme" content="dark" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Cornelius Owusu-Ansah" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={metaTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Article specific Open Graph */}
      {publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content="Cornelius Owusu-Ansah" />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_META.twitterHandle} />
      <meta name="twitter:creator" content={DEFAULT_META.twitterHandle} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={metaTitle} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </Head>
  );
}
