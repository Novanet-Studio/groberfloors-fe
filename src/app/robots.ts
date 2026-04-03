import { MetadataRoute } from 'next';
import commonData from './assets/data/common.json';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${commonData.url}/sitemap.xml`,
  };
}
