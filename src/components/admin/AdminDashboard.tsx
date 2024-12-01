import React, { useState } from 'react';
import { useBlogStore } from '../../store/blogStore';
import { useAuthStore } from '../../store/authStore';
import { Trash2, Edit, LogOut, Image as ImageIcon } from 'lucide-react';

const AdminDashboard = () => {
  const { posts, deletePost, addPost, updatePost } = useBlogStore();
  const logout = useAuthStore((state) => state.logout);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState({
    id: '',
    title: '',
    content: '',
    excerpt: '',
    image: '',
    additionalImages: [] as string[],
    date: '',
    author: 'Reuben Komen'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Process content to insert additional images
    let processedContent = currentPost.content;
    if (currentPost.additionalImages.length > 0) {
      const words = processedContent.split(' ');
      const insertPoints = Math.floor(words.length / 300);
      
      currentPost.additionalImages.forEach((imgUrl, index) => {
        if (index < insertPoints && words.length > (index + 1) * 300) {
          const position = (index + 1) * 300;
          words.splice(position, 0, `\n\n![Additional Image ${index + 1}](${imgUrl})\n\n`);
        }
      });
      
      processedContent = words.join(' ');
    }

    const postData = {
      ...currentPost,
      content: processedContent,
    };

    if (isEditing) {
      updatePost(currentPost.id, postData);
    } else {
      addPost({
        ...postData,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0]
      });
    }
    resetForm();
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentPost({
      id: '',
      title: '',
      content: '',
      excerpt: '',
      image: '',
      additionalImages: [],
      date: '',
      author: 'Reuben Komen'
    });
  };

  const handleEdit = (post: any) => {
    setIsEditing(true);
    setCurrentPost({
      ...post,
      additionalImages: []
    });
  };

  const handleAddImage = () => {
    setCurrentPost({
      ...currentPost,
      additionalImages: [...currentPost.additionalImages, '']
    });
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...currentPost.additionalImages];
    newImages[index] = value;
    setCurrentPost({
      ...currentPost,
      additionalImages: newImages
    });
  };

  const removeImage = (index: number) => {
    setCurrentPost({
      ...currentPost,
      additionalImages: currentPost.additionalImages.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Blog Management
          </h2>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Title</label>
              <input
                type="text"
                value={currentPost.title}
                onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Main Image URL</label>
              <input
                type="url"
                value={currentPost.image}
                onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Excerpt</label>
              <input
                type="text"
                value={currentPost.excerpt}
                onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Content</label>
              <textarea
                value={currentPost.content}
                onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
                rows={6}
                required
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-gray-300">Additional Images</label>
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                >
                  <ImageIcon className="w-4 h-4" />
                  Add Image
                </button>
              </div>
              
              {currentPost.additionalImages.map((url, index) => (
                <div key={index} className="flex gap-4 mb-4">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    placeholder="Image URL"
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600"
            >
              {isEditing ? 'Update Post' : 'Add Post'}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="grid gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{post.title}</h3>
                <p className="text-gray-400">{post.excerpt}</p>
                <div className="text-sm text-gray-500 mt-2">Published on {post.date}</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;