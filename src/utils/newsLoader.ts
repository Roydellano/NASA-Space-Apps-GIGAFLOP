import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Safely loads news articles, filtering out any with invalid data
 * instead of crashing the entire site
 */
export async function getSafeNewsCollection(): Promise<CollectionEntry<'news'>[]> {
  try {
    // Try to get all news articles
    const allNews = await getCollection('news');
    return allNews;
  } catch (error) {
    console.error('Error loading news collection:', error);
    
    // If the collection fails to load, try to load articles individually
    // and filter out the problematic ones
    return await loadNewsArticlesIndividually();
  }
}

/**
 * Loads news articles one by one, skipping any that fail validation
 */
async function loadNewsArticlesIndividually(): Promise<CollectionEntry<'news'>[]> {
  const validArticles: CollectionEntry<'news'>[] = [];
  
  try {
    // Get all possible news entries without validation
    const allEntries = await getCollection('news', () => true);
    
    for (const entry of allEntries) {
      try {
        // Try to access the data property which triggers validation
        const { title, summary, publishDate, tags, readTime, priority } = entry.data;
        
        // Basic validation to ensure required fields exist and are correct types
        if (
          typeof title === 'string' && title.trim() &&
          typeof summary === 'string' && summary.trim() &&
          publishDate instanceof Date && !isNaN(publishDate.getTime()) &&
          Array.isArray(tags) && tags.length > 0 &&
          typeof readTime === 'number' && readTime > 0 &&
          ['high', 'medium', 'low'].includes(priority)
        ) {
          validArticles.push(entry);
        } else {
          console.warn(`Skipping article '${entry.slug}': Invalid data structure`);
        }
      } catch (entryError) {
        console.warn(`Skipping article '${entry.slug}': Validation failed`, entryError);
      }
    }
  } catch (error) {
    console.error('Failed to load news articles individually:', error);
  }
  
  return validArticles;
}

/**
 * Safely gets a specific news article by slug
 */
export async function getSafeNewsArticle(slug: string): Promise<CollectionEntry<'news'> | null> {
  try {
    const allNews = await getSafeNewsCollection();
    return allNews.find(article => article.slug === slug) || null;
  } catch (error) {
    console.error(`Error loading article '${slug}':`, error);
    return null;
  }
}
