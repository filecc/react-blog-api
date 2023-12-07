export interface Post {
  id: string;
  title:string;
  content: string;
  slug: string;
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  postedById: string
  tags: string[];
  author: {
    name: string;
    email: string;
  };
}
