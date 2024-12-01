import React from 'react';
import { useBlogStore } from '../store/blogStore';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const { posts } = useBlogStore();

  return (
    <section id="blog" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Latest Blog Posts
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  {post.title}
                </h3>
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
                <a
                  href={`#blog/${post.id}`}
                  className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;