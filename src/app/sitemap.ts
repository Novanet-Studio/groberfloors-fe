import { MetadataRoute } from 'next';
import commonData from './assets/data/common.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/vinyls', '/wallpanel'].map((route) => ({
    url: `${commonData.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
