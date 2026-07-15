export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  status: "draft" | "published";
  readTime: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  publishedAt: unknown;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface BlogPostFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string;
  author: string;
  status: "draft" | "published";
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}
