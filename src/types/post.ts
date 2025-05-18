export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  authorAvatar?: string;
  authorTitle?: string; // For BlogPostDetail
  date: string;
  publishDate?: string;
  readTime?: number; // For BlogPostDetail and BlogRelatedPosts
  tags?: string[]; // For BlogPostDetail
  content?: string; // For BlogPostDetail
};