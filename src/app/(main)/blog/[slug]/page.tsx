import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostDetail from '@/components/Blog/BlogPostDetail';
import BlogRelatedPosts from '@/components/Blog/BlogRelatedPosts';
import { fetchSinglePost, fetchGraphPosts, PostEdge } from '@/app/libs/graphapi';
import { Post } from '@/types/post';
import he from 'he';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Utility function to strip HTML tags
const stripHtmlTags = (html: string): string => {
  return he.decode(
    html
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/\[…\]/g, '...')
      .replace(/\n/g, ' ')
      .trim()
  );
};

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params; // Await params
  try {
    const singlePost = await fetchSinglePost(slug);

    if (!singlePost) {
      return {
        title: 'Blog Post Not Found | Indo Wagen',
        description: 'The blog post you are looking for could not be found.',
      };
    }

    return {
      title: `${stripHtmlTags(singlePost.title)} | Indo Wagen Blog`,
      description: stripHtmlTags(singlePost.excerpt),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post Not Found | Indo Wagen',
      description: 'The blog post you are looking for could not be found.',
    };
  }
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
  try {
    const postEdges = await fetchGraphPosts();
    return postEdges.map((edge) => ({
      slug: edge.node.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Main page component
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; // Await params

  // Fetch the single post
  let singlePost;
  try {
    singlePost = await fetchSinglePost(slug);
  } catch (error) {
    console.error('Error fetching single post:', error);
    notFound();
  }

  if (!singlePost) {
    notFound();
  }

  // Map SinglePost to Post type
  const post: Post = {
    id: singlePost.id,
    slug: singlePost.slug,
    title: stripHtmlTags(singlePost.title),
    excerpt: stripHtmlTags(singlePost.excerpt),
    content: singlePost.content || '',
    coverImage: singlePost.featuredImage?.node?.sourceUrl || '/default-image.jpg',
    category: stripHtmlTags(singlePost.categories.edges[0]?.node?.name || 'Uncategorized'),
    author: stripHtmlTags(singlePost.author.node.name),
    authorAvatar: singlePost.author.node.avatar?.url,
    date: new Date(singlePost.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    publishDate: singlePost.date,
    readTime: Math.ceil((singlePost.content?.split(' ').length || 200) / 200), // Estimate: 200 words per minute
    tags: singlePost.categories.edges.map((edge) => edge.node.name) || [], // Use categories as tags
    authorTitle: 'Contributor', // Static fallback
  };

  // Fetch related posts
  let postEdges: PostEdge[];
  try {
    postEdges = await fetchGraphPosts();
  } catch (error) {
    console.error('Error fetching related posts:', error);
    postEdges = [];
  }

  // Map PostEdge to Post type
  const posts: Post[] = postEdges.map((edge) => ({
    id: edge.node.id,
    slug: edge.node.slug,
    title: stripHtmlTags(edge.node.title),
    excerpt: stripHtmlTags(edge.node.excerpt),
    coverImage: edge.node.featuredImage?.node?.sourceUrl || '/default-image.jpg',
    category: stripHtmlTags(edge.node.categories.edges[0]?.node?.name || 'Uncategorized'),
    author: stripHtmlTags(edge.node.author.node.name),
    authorAvatar: undefined, // Not available in PostNode
    date: new Date(edge.node.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    publishDate: edge.node.date,
    readTime: Math.ceil((edge.node.content?.split(' ').length || 200) / 200),
    tags: edge.node.categories.edges.map((edge) => edge.node.name) || [],
    authorTitle: 'Contributor',
    content: edge.node.content || '',
  }));

  // Get related posts based on category
  const relatedPosts = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <BlogPostDetail post={post} />
      {/* <BlogRelatedPosts posts={relatedPosts} /> */}
    </>
  );
}