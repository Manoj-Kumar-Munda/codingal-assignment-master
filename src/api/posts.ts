// src/api/postApi.ts

export interface Post {
  id: number;
  title: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  userId: number;
}

export interface PostResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export async function fetchPosts(
  page: number,
  limit: number = 10
): Promise<PostResponse> {
  const skip = page * limit;
  const response = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}&select=title,reactions,userId`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data;
}
