import React, { useState, useEffect, useRef } from "react";
import { fetchPosts, Post } from "../api/posts";
import { PostLoader } from "../components/Loader/Loader";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const limit = 10;

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPosts(page, limit);
      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
    } catch (err) {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [page]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (
        container.scrollHeight - container.scrollTop <=
          container.clientHeight + 180 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div
      ref={containerRef}
      className="h-full mx-auto px-4 overflow-y-auto scroll-container"
    
    >
      <h1 className="text-2xl font-bold ">Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li
            key={index}
            className="p-4 mb-2 bg-gray-100 rounded shadow transition hover:shadow-md"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p>Likes: {post?.reactions?.likes}</p>
            <p>Disikes: {post?.reactions?.dislikes}</p>
            <p>User ID: {post.userId}</p>
          </li>
        ))}
      </ul>
      {error && <div className="text-red-500 text-center my-4">{error}</div>}
      {loading && (
        <div className="flex flex-col gap-2 relative z-0 ">
          <PostLoader lines={2} />
          <PostLoader lines={2} />
          <PostLoader lines={2} />
        </div>
      )}
    </div>
  );
};

export default PostsPage;
