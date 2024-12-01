import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlogStore } from '../store/blogStore';
import { Calendar, User, ArrowLeft, Home, Heart, MessageCircle, Send, Reply } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const { posts, likePost, addComment, addReply } = useBlogStore();
  const post = posts.find(p => p.id === id);
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [showReplyForm, setShowReplyForm] = useState<{ [key: string]: boolean }>({});

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-20 px-4">
        <div className="max-w-4xl mx-auto py-20">
          <h2 className="text-2xl text-gray-300">Post not found</h2>
          <div className="flex gap-4 mt-4">
            <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Link to="/" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(post.id, {
        content: newComment,
        author: 'Guest User',
        postId: post.id
      });
      setNewComment('');
    }
  };

  const handleReply = (commentId: string) => {
    if (replyText[commentId]?.trim()) {
      addReply(post.id, commentId, {
        content: replyText[commentId],
        author: 'Guest User',
        commentId
      });
      setReplyText({ ...replyText, [commentId]: '' });
      setShowReplyForm({ ...showReplyForm, [commentId]: false });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 px-4">
      <article className="max-w-4xl mx-auto py-20">
        <div className="flex gap-4 mb-8">
          <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
        
        <h1 className="text-4xl font-bold text-gray-100 mb-6">{post.title}</h1>
        
        <div className="flex items-center gap-6 text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            {post.author}
          </div>
          <button
            onClick={() => likePost(post.id)}
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
          >
            <Heart className="w-5 h-5" />
            {post.likes} likes
          </button>
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>

        {/* Comments Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-6">Comments</h3>
          
          <form onSubmit={handleComment} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Comment
              </button>
            </div>
          </form>

          <div className="space-y-6">
            {post.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-900/50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-semibold text-gray-200">{comment.author}</span>
                    <span className="text-sm text-gray-500 ml-2">{comment.date}</span>
                  </div>
                  <button
                    onClick={() => setShowReplyForm({
                      ...showReplyForm,
                      [comment.id]: !showReplyForm[comment.id]
                    })}
                    className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    <Reply className="w-4 h-4" />
                    Reply
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{comment.content}</p>

                {showReplyForm[comment.id] && (
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      value={replyText[comment.id] || ''}
                      onChange={(e) => setReplyText({
                        ...replyText,
                        [comment.id]: e.target.value
                      })}
                      placeholder="Write a reply..."
                      className="flex-1 px-3 py-1 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 text-sm"
                    />
                    <button
                      onClick={() => handleReply(comment.id)}
                      className="px-4 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors text-sm"
                    >
                      Reply
                    </button>
                  </div>
                )}

                {comment.replies.length > 0 && (
                  <div className="ml-6 space-y-3 border-l-2 border-gray-800 pl-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-900/30 rounded-lg p-3">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-gray-200">{reply.author}</span>
                          <span className="text-sm text-gray-500">{reply.date}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{reply.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;