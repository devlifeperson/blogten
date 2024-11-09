import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "Market Watch Plus - Investment Intelligence",
  description: "Financial news, market analysis, and investment strategies.",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "Link & URL Tools",
    slug: "link-tools",
    tools: [
      {
        title: "URL Shortener",
        desc: "Transform long URLs into brief, shareable links.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "QR Code Maker",
        desc: "Create QR codes for convenient mobile sharing.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "Link Performance Tracker",
        desc: "Analyze and monitor the effectiveness of shortened URLs.",
        href: "https://free-url.short360s.com/stats",
      },
    ],
  },
  {
    title: "General Tools",
    slug: "common-utilities",
    tools: [
      {
        title: "Find Public IP",
        desc: "Identify your device's public IP for network diagnostics.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Generate Secure Password",
        desc: "Generate robust passwords for account security.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Browser Update Checker",
        desc: "Ensure your browser is up-to-date for optimal performance.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Professional Invoice Generator",
        desc: "Create detailed invoices for business needs.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Code Formatter",
        desc: "Format HTML, CSS, JavaScript, and JSON code for clarity.",
        href: "https://tools360s.com/code-formatter",
      },
    ],
  },
  {
    title: "SEO & Website Analysis",
    slug: "seo-tools",
    tools: [
      {
        title: "Index Checker for Google",
        desc: "Check if your URLs are indexed on Google for better visibility.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Create Backlinks",
        desc: "Generate backlinks to enhance SEO and rankings.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "Redirect Path Inspector",
        desc: "Examine URL redirects to avoid broken links.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Meta Tag Analysis",
        desc: "Optimize meta tags for improved SEO performance.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Google Cache Viewer",
        desc: "View the cached version of your site on Google.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Website Security Analysis",
        desc: "Identify vulnerabilities to secure your website.",
        href: "https://tools360s.com/safe-browsing",
      },
    ],
  },
  {
    title: "Image Editing Tools",
    slug: "image-tools",
    tools: [
      {
        title: "Watermark Creator",
        desc: "Add watermarks to images for protection.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Image Format Converter",
        desc: "Convert images between formats like JPEG, PNG, WebP.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Cloud Image Storage",
        desc: "Upload images to the cloud for easy access.",
        href: "https://review360.info/upload-image",
      },
      {
        title: "Compress Images",
        desc: "Reduce image file size to improve load times.",
        href: "https://review360.info",
      },
      {
        title: "Image Cropper",
        desc: "Crop images to desired dimensions.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Image Resizer",
        desc: "Resize images for different platforms and uses.",
        href: "https://review360.info/image-resizer",
      },
    ],
  },
  {
    title: "Text Tools",
    slug: "text-utilities",
    tools: [
      {
        title: "Word Counter",
        desc: "Count words, characters, and sentences in text.",
        href: "https://tools360s.com/word-counter",
      },
      {
        title: "Text Comparison Tool",
        desc: "Compare two texts to highlight differences.",
        href: "https://tools360s.com/text-compare",
      },
    ],
  },
];
