// Define a comprehensive page configuration type
export interface PageConfig {
  metaTags: {
    description: string;
    favicon: string;
    image: string;
    imageAlt: string;
    siteName: string;
    title: string;
    twitterCardType: string;
    type: string;
    url: string;
    domain: string;
  };
}

const standard = {
  domain: "convergemarketing.com",
  favicon: "/favicon.ico",
  image: "https://converge-strapi-prod.s3.amazonaws.com/convergeog_03fb18914a.webp",
  imageAlt: "Converge Marketing",
  siteName: "Converge Marketing",
}

// Central registry of all page configurations
// Each page config MUST be added here at build time
const pageConfigs: Record<string, PageConfig> = {
  index: {
    metaTags: {
      description:
        "With 20+ years of experience, Converge delivers performance-driven marketing through data, creativity, and technology for measurable business growth.",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Converge | Return on Everything",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/",
    },
  },
  '404': {
    metaTags: {
      description:
        "With 20+ years of experience, Converge delivers performance-driven marketing through data, creativity, and technology for measurable business growth.",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Page Not Found | 404",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/404/",
    },
  },
  'case-study': {
    metaTags: {
      description:
        "We drive business growth by attracting customers and integrating insights for better sales outcomes. Let's Converge for success!",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Our Work | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/case-study/",
    },
  },
  contact: {
    metaTags: {
      description:
        "Contact us today to leverage your marketing performance. Partner with Converge to unlock measurable growth through innovative, results-driven strategies.",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Contact US | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/contact/",
    },
  },
  esign: {
    metaTags: {
      description:
        "Consent to Use Electronic Signatures and Records",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "E-Sign | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/esign/",
    },
  },
  health: {
    metaTags: {
      description:
        "Our Consumer Health Data Privacy Notice",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Health | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/health/",
    },
  },
  insights: {
    metaTags: {
      description:
        "We drive business growth by attracting customers and integrating insights for better sales outcomes. Let's Converge for success!",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "News & Insights | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/insights/",
    },
  },
  'insights-post': {
    metaTags: {
      description:
        "We drive business growth by attracting customers and integrating insights for better sales outcomes. Let's Converge for success!",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "News & Insights | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/insights-post/",
    },
  },
  'maximize-paid-social-roi-with-converge':{
    metaTags: {
      description:
        "We drive business growth by attracting customers and integrating insights for better sales outcomes. Let's Converge for success!",
      domain: standard.domain,
      favicon: standard.favicon,
      image: "https://converge-strapi-prod.s3.amazonaws.com/Levine_Open_Graph_2ecfb6919d.webp",
      imageAlt: "Maximize Paid Social ROI with Converge: Your Agency of Action",
      siteName: standard.siteName,
      title: 'Newsroom | Converge', //'Maximize Paid Social ROI with AI: Converge, "Your Agency of Action" will show you how!',
      twitterCardType: "summary",
      type: "website",
      url: "https://www.convermarketing.com/newsroom/home-services-must-get-smarter/",
    },
  },
  'our-work': {
    metaTags: {
      description:
        "The proof is in the numbers: With $5B in media spend, $2B in client sales, and 1M+ leads generated, we deliver measurable marketing success.",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Our Work | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/our-work/",
    },
  },
  privacy: {
    metaTags: {
      description:
        "Our Privacy Policy",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Privacy Policy | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/privacy/",
    },
  },
  terms: {
    metaTags: {
      description:
        "Our Terms of Use",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Terms of Use | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/terms/",
    },
  },
  'what-we-do': {
    metaTags: {
      description:
        "Transform your marketing with data-driven media strategies, qualified lead generation, creative campaigns, and advanced analytics for measurable results.",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "What We Do | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/what-we-do/",
    },
  },
  'who-we-are': {
    metaTags: {
      description:
        "We are Converge—your Agency of Action. Our experts deliver measurable business value, optimize marketing performance, and drive real growth.",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Who We Are | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/who-we-are/",
    },
  },
  'legal-advertising-services': {
    metaTags: {
      description:
        "Legal documents and terms for Converge advertising services, including terms of service, agreements, and policies.",
      domain: standard.domain,
      favicon: standard.favicon,
      image: standard.image,
      imageAlt: standard.imageAlt,
      siteName: standard.siteName,
      title: "Legal Documents | Converge",
      twitterCardType: "summary",
      type: "website",
      url: "https://convergemarketing.com/legal/advertising-services/",
    },
  },
};

// Helper to get config by page name (without path or extension)
export function getPageConfig(pageName: string): PageConfig {
  return pageConfigs[pageName] || pageConfigs["index"]; // Fallback to index
}

// Export static config for use at build time
export default pageConfigs;
