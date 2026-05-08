export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://emeaglobalsolutions.com/sitemap.xml',
  };
}
