import { GraphQLClient } from "graphql-request";

// Define types for GraphQL response data
export type PostNode = {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  slug: string;
  author: {
    node: {
      id: string;
      name: string;
    };
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  categories: {
    edges: {
      node: {
        name: string;
        slug: string;
      };
    }[];
  };
};

export type PostEdge = {
  node: PostNode;
};

export type CategoryNode = {
  id: string;
  slug: string;
  name: string;
};

export type CategoryEdge = {
  node: CategoryNode;
};

export type RecentPostNode = {
  date: string;
  title: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
};

export type FeaturedPostNode = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  author: {
    node: {
      id: string;
      name: string;
    };
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  categories: {
    edges: {
      node: {
        name: string;
        slug: string;
      };
    }[];
  };
};

export type SinglePost = {
  id: string;
  databaseId: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  slug: string;
  isSticky: boolean;
  desiredSlug: string;
  author: {
    node: {
      id: string;
      name: string;
      slug: string;
      avatar?: {
        height: number;
        url: string;
        width: number;
      };
    };
  };
  featuredImage?: {
    node: {
      altText: string;
      caption: string;
      sourceUrl: string;
      srcSet: string;
      sizes: string;
      id: string;
    };
  };
  categories: {
    edges: {
      node: {
        databaseId: number;
        id: string;
        name: string;
        slug: string;
      };
    }[];
  };
};

// Initialize the GraphQL client
const client = new GraphQLClient("https://lavenderblush-toad-113068.hostingersite.com/graphql");

// Response type for fetchGraphPosts
type FetchGraphPostsResponse = {
  posts: {
    edges: PostEdge[];
  };
};

export async function fetchGraphPosts(): Promise<PostEdge[]> {
  const query = `
    query AllPosts {
      posts(first: 200) {
        edges {
          node {
            id
            title
            excerpt
            content
            date
            author {
              node {
                id
                name
              }
            }
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await client.request<FetchGraphPostsResponse>(query);
    return data.posts.edges;
  } catch (error) {
    console.error("GraphQL posts request error:", error);
    throw new Error("Failed to fetch posts");
  }
}

// Response type for fetchGraphCategories
type FetchGraphCategoriesResponse = {
  categories: {
    edges: CategoryEdge[];
  };
};

export async function fetchGraphCategories(): Promise<CategoryEdge[]> {
  const query = `
    query FetchCategories {
      categories(first: 100, where: { hideEmpty: true }) {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
    }
  `;

  try {
    const data = await client.request<FetchGraphCategoriesResponse>(query);
    return data.categories.edges;
  } catch (error) {
    console.error("GraphQL categories request error:", error);
    throw new Error("Failed to fetch categories");
  }
}

// Response type for fetchGraphRecentPosts
type FetchGraphRecentPostsResponse = {
  posts: {
    nodes: RecentPostNode[];
  };
};

export async function fetchGraphRecentPosts(): Promise<RecentPostNode[]> {
  const query = `
    query FetchRecentPosts {
      posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          date
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const data = await client.request<FetchGraphRecentPostsResponse>(query);
    return data.posts.nodes;
  } catch (error) {
    console.error("GraphQL recent posts request error:", error);
    throw new Error("Failed to fetch recent posts");
  }
}

// Response type for fetchGraphFeaturedPost
type FetchGraphFeaturedPostResponse = {
  posts: {
    nodes: FeaturedPostNode[];
  };
};

export async function fetchGraphFeaturedPost(): Promise<FeaturedPostNode | null> {
  const query = `
    query FetchFeaturedPost {
      posts(first: 1, where: { categoryName: "Featured", orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          excerpt
          date
          slug
          author {
            node {
              id
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await client.request<FetchGraphFeaturedPostResponse>(query);
    console.log("Featured post response:", data.posts.nodes);
    return data.posts.nodes[0] || null;
  } catch (error) {
    console.error("GraphQL featured post request error:", error);
    return null;
  }
}

// Response type for fetchGraphLatestPosts
type FetchGraphLatestPostsResponse = {
  posts: {
    nodes: PostNode[];
  };
};

export async function fetchGraphLatestPosts(): Promise<PostNode[]> {
  const query = `
    query FetchLatestPosts {
      posts(first: 3, where: { categoryNotIn: ["Featured"], orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          excerpt
          date
          slug
          author {
            node {
              id
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await client.request<FetchGraphLatestPostsResponse>(query);
    console.log("Latest posts response:", data.posts.nodes);
    return data.posts.nodes;
  } catch (error) {
    console.error("GraphQL latest posts request error:", error);
    return [];
  }
}

export async function fetchSinglePost(slug: string): Promise<SinglePost> {
  const query = `
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        author {
          node {
            avatar {
              height
              url
              width
            }
            id
            name
            slug
          }
        }
        id
        categories {
          edges {
            node {
              databaseId
              id
              name
              slug
            }
          }
        }
        content
        date
        excerpt
        featuredImage {
          node {
            altText
            caption
            sourceUrl
            srcSet
            sizes
            id
          }
        }
        modified
        databaseId
        title
        slug
        isSticky
        desiredSlug
      }
    }
  `;

  const variables = { slug };

  try {
    const data = await client.request<{ post: SinglePost }>(query, variables);
    return data.post;
  } catch (error) {
    console.error("GraphQL single post request error:", error);
    throw new Error("Failed to fetch single post");
  }
}

export async function fetchPostByCat(slug: string): Promise<PostEdge[]> {
  const query = `
    query PostsByCategory($slug: String!) {
      posts(first: 200, where: { categoryName: $slug }) {
        edges {
          node {
            id
            title
            excerpt
            date
            author {
              node {
                id
                name
              }
            }
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = { slug };

  try {
    const data = await client.request<{ posts: { edges: PostEdge[] } }>(query, variables);
    return data.posts.edges;
  } catch (error) {
    console.error("GraphQL posts by category request error:", error);
    throw new Error("Failed to fetch posts by category");
  }
}