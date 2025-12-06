import React, { useEffect } from "react";

const SEO = ({
  title = "Proflex Window Profiles - Premium UPVC Windows & Doors | Made in India",
  description = "Premium UPVC window profiles and doors manufacturer in India. Energy-efficient casement & sliding windows with weather-proof design. Get free quotes for your home renovation.",
  keywords = "UPVC windows, UPVC doors, window profiles, casement windows, sliding windows, energy efficient windows, weather proof windows, made in India, home renovation, window installation, door installation, Kolar, Karnataka",
  image = "https://proflexwindowprofiles.com/static/media/main.b0e923d03afb449528ed.png",
  url = "https://proflexwindowprofiles.com",
  type = "website",
  structuredData = null,
}) => {
  const fullTitle = title.includes("Proflex Window Profiles")
    ? title
    : `${title} | Proflex Window Profiles`;

  const fullUrl = url.startsWith("http")
    ? url
    : `https://proflexwindowprofiles.com${url}`;

  useEffect(() => {
    const updateMetaTag = (name, content, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");

        if (property) meta.setAttribute("property", name);
        else meta.setAttribute("name", name);

        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Title
    document.title = fullTitle;

    // SEO TAGS
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Google Site Verification
    updateMetaTag(
      "google-site-verification",
      "ClC-rL5ZpYQPfBYWB2l3ZcEfqTSxB8SARTm1yDK02p8"
    );

    // Open Graph
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:url", fullUrl);
    updateMetaTag("twitter:site", "@proflexwindows");


    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // Structured Data
    let ldJsonScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (!ldJsonScript) {
      ldJsonScript = document.createElement("script");
      ldJsonScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(ldJsonScript);
    }
    ldJsonScript.textContent = JSON.stringify(
      structuredData || {
        "@context": "https://schema.org",
        "@type": "Organization",
      }
    );

    // ⭐ ADDING GOOGLE ANALYTICS (GA4) — as requested ⭐

    // 1. Add the async GA script
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src =
      "https://www.googletagmanager.com/gtag/js?id=G-E6XQC0ZC0X";
    document.head.appendChild(gaScript);

    // 2. Add the inline GA config script
    const gaConfig = document.createElement("script");
    gaConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E6XQC0ZC0X');
    `;
    document.head.appendChild(gaConfig);

    // ⭐ GA4 script now automatically appears before </head> in the DOM ⭐
  }, [
    fullTitle,
    description,
    keywords,
    image,
    fullUrl,
    type,
    structuredData,
  ]);

  return null;
};

export default SEO;
