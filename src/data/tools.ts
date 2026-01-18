export type Tool = {
  slug: string;
  name: string;
  description: string;
  href?: string;
  cta?: string;
};

export const tools: Tool[] = [
  {
    slug: "convert-json-to-markdown",
    name: "Convert JSON to Markdown",
    description:
      "Convert your JSON file to well-formatted Markdown. Fast, free, no sign up - start converting your JSON now.",
  },
];

// export const tools: Tool[] = [
//   {
//     slug: "sitemap-finder-checker",
//     name: "Sitemap Finder & Checker",
//     description:
//       "Find and validate all sitemaps on any website instantly. Discover hidden sitemaps, check validity, and extract total URL counts. Perfect for SEO audits and website analysis.",
//   },
//   {
//     slug: "sitemap-validator",
//     name: "Sitemap Validator",
//     description:
//       "Validate your XML sitemap for errors, compliance, and SEO optimization. Get detailed error reports and performance scoring to ensure your sitemap meets all standards.",
//   },
//   {
//     slug: "xml-sitemap-generator",
//     name: "XML Sitemap Generator",
//     description:
//       "Generate a comprehensive XML sitemap for your website instantly. Crawl up to 50,000 URLs with customizable priority and changefreq settings. Perfect for SEO optimization.",
//   },
//   {
//     slug: "sitemap-url-extractor",
//     name: "Sitemap URL Extractor",
//     description:
//       "Extract all URLs from any website's sitemap.xml file. Perfect for SEO analysis, content auditing, and website crawling. Fast, free, no sign up required.",
//   },
//   {
//     slug: "sitemap-urls-comparison",
//     name: "Sitemap URLs Comparison Tool",
//     description:
//       "Compare two XML sitemaps to find differences. Identify added, removed, or unchanged URLs between sitemap versions. Perfect for SEO audits and site migration analysis.",
//   },
//   {
//     slug: "sitemap-split-merger",
//     name: "Sitemap Split/Merger Tool",
//     description:
//       "Split large sitemaps into smaller chunks or merge multiple sitemaps into one. Automatically handles the 50,000 URL limit and generates sitemap index files when needed.",
//   },
//   {
//     slug: "sitemap-analytics-insights",
//     name: "Sitemap Analytics & Insights",
//     description:
//       "Get comprehensive analytics on your XML sitemap including URL patterns, depth analysis, file type distribution, and SEO optimization recommendations with visual charts.",
//   },
//   {
//     slug: "sitemap-index-generator",
//     name: "Sitemap Index Generator",
//     description:
//       "Generate XML sitemap index files from multiple sitemap URLs. Perfect for large websites with multiple sitemaps. Includes automatic URL validation and last modified dates.",
//   },
//   {
//     slug: "sitemap-to-robots-txt",
//     name: "Sitemap to Robots.txt Generator",
//     description:
//       "Generate robots.txt files with sitemap references and crawling directives. Configure user agents, allow/disallow paths, crawl delays, and sitemap locations for optimal SEO.",
//   },
//   {
//     slug: "sitemap-frequency-analyzer",
//     name: "Sitemap Frequency Analyzer",
//     description:
//       "Analyze your XML sitemap's changefreq and priority values with detailed insights. Get distribution charts, optimization recommendations, and SEO performance analysis.",
//   },
//   {
//     slug: "website-url-extractor",
//     name: "Website URL Extractor",
//     description:
//       "Crawl and extract all URLs from any website. Perfect for site mapping, content auditing, and comprehensive SEO analysis. Fast, free, no sign up required.",
//   },
//   {
//     slug: "ai-chatbot-conversation-analysis",
//     name: "AI Chatbot Conversation Analysis",
//     description:
//       "Analyze your chatbot conversations with AI to uncover knowledge gaps, user intent patterns, and actionable improvements. Get comprehensive insights to optimize your chatbot performance.",
//   },
//   {
//     slug: "best-ai-prompt-generator",
//     name: "Best AI Prompt Generator",
//     description:
//       "Create high-quality AI prompts with proven frameworks like APE, RACE, CREATE, and SPARK. Generate professional prompts for ChatGPT, Claude, and all AI models.",
//   },
//   {
//     slug: "ai-prompt-optimizer",
//     name: "AI Prompt Optimizer",
//     description:
//       "Transform your existing prompts into powerful, framework-based instructions. Select a proven framework and watch your prompts become clearer and more effective.",
//   },
//   {
//     slug: "ai-chat-with-text-data",
//     name: "AI Chat with Your Text Data",
//     description:
//       "Paste any plain text (report, article, transcript, or policy doc) and chat with our AI to ask questions, get short summaries, or extract insights and get instant, accurate answers.",
//   },
//   {
//     slug: "ai-chat-with-website-data",
//     name: "AI Chat with Your Website Data",
//     description:
//       "Enter any webpage URL and chat with our AI to ask any questions, generate FAQs, or extract insights and get instant, accurate answers.",
//   },
//   {
//     slug: "ai-chat-with-document-data",
//     name: "AI Chat with Your Document & Data",
//     description:
//       "Upload any document and chat with our AI to ask questions, get short summaries, or extract insights and get instant, accurate answers.",
//   },
//   {
//     slug: "ai-chat-with-pdf-data",
//     name: "AI Chat with Your PDF Document & Data",
//     description:
//       "Upload any PDF document and chat with our AI to ask questions, get short summaries, or extract insights and get instant, accurate answers.",
//   },
//   {
//     slug: "ai-chat-with-word-data",
//     name: "AI Chat with Your Word Document & Data",
//     description:
//       "Upload any Word document and chat with our AI to ask questions, get short summaries, or extract insights and get instant, accurate answers.",
//   },
//   {
//     slug: "convert-pdf-to-markdown",
//     name: "Convert PDF to Markdown",
//     description:
//       "Convert your PDF document to Markdown. Fast, free, no sign up - start converting your PDF now.",
//   },
//   {
//     slug: "convert-csv-to-markdown",
//     name: "Convert CSV to Markdown",
//     description:
//       "Convert your CSV file to a Markdown table. Fast, free, no sign up - start converting your CSV now.",
//   },
//   {
//     slug: "convert-json-to-markdown",
//     name: "Convert JSON to Markdown",
//     description:
//       "Convert your JSON file to well-formatted Markdown. Fast, free, no sign up - start converting your JSON now.",
//   },
//   {
//     slug: "convert-docx-to-markdown",
//     name: "Convert DOCX to Markdown",
//     description:
//       "Convert your Word document to Markdown. Fast, free, no sign up - start converting your DOCX now.",
//   },
//   {
//     slug: "convert-rtf-to-markdown",
//     name: "Convert RTF to Markdown",
//     description:
//       "Convert your RTF document to Markdown. Fast, free, no sign up - start converting your RTF now.",
//   },
//   {
//     slug: "convert-html-to-markdown",
//     name: "Convert HTML to Markdown",
//     description:
//       "Convert your HTML file to clean Markdown. Fast, free, no sign up - start converting your HTML now.",
//   },
//   {
//     slug: "convert-paste-to-markdown",
//     name: "Convert Paste to Markdown",
//     description:
//       "Convert any pasted text to clean Markdown. Fast, free, no sign up - start converting your text now.",
//   },
//   {
//     slug: "convert-webpage-to-markdown",
//     name: "Convert Webpage to Markdown",
//     description:
//       "Enter any webpage URL and convert it to Markdown instantly. Perfect for documentation, content migration, and archiving.",
//   },
//   {
//     slug: "convert-notion-to-markdown",
//     name: "Convert Notion to Markdown",
//     description:
//       "Enter any public Notion page URL and convert it to Markdown instantly. Perfect for documentation, content migration, and archiving.",
//   },
//   {
//     slug: "convert-google-docs-to-markdown",
//     name: "Convert Google Docs to Markdown",
//     description:
//       "Enter any public Google Docs URL and convert it to Markdown instantly. Perfect for documentation, content migration, and archiving. Free to use. No sign up required.",
//   },
//   {
//     slug: "convert-xml-to-markdown",
//     name: "Convert XML to Markdown",
//     description:
//       "Upload any XML document and convert it to Markdown instantly. Perfect for data transformation.",
//   },
// ];
