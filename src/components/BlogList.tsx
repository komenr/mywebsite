import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogStore } from '../store/blogStore';
import { Calendar, User, Home } from 'lucide-react';

const BlogList = () => {
  const { posts } = useBlogStore();

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 px-4">
      <div className="max-w-6xl mx-auto py-20">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-100">
                  {post.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;