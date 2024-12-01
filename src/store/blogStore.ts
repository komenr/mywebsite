import { create } from 'zustand';
import { BlogPost, Comment, Reply } from '../types/blog';

interface BlogState {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  updatePost: (id: string, updatedPost: Partial<BlogPost>) => void;
  likePost: (id: string) => void;
  addComment: (postId: string, comment: Omit<Comment, 'id' | 'date' | 'replies'>) => void;
  addReply: (postId: string, commentId: string, reply: Omit<Reply, 'id' | 'date'>) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  posts: [
    {
      id: '1',
      title: 'Getting Started with Web Development',
      content: 'Web development is an exciting field that combines creativity with technical skills...',
      excerpt: 'Learn the basics of web development and start your journey.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
      date: '2024-03-15',
      author: 'Reuben Komen',
      likes: 5,
      comments: []
    },
    {
      id: '2',
      title: 'Data Analysis Fundamentals',
      content: 'Understanding data analysis is crucial in today\'s data-driven world...',
      excerpt: 'Explore the essential concepts of data analysis.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      date: '2024-03-14',
      author: 'Reuben Komen',
      likes: 3,
      comments: []
    }
  ],
  addPost: (post) => set((state) => ({ 
    posts: [...state.posts, { ...post, likes: 0, comments: [] }] 
  })),
  deletePost: (id) => set((state) => ({ 
    posts: state.posts.filter(post => post.id !== id) 
  })),
  updatePost: (id, updatedPost) => set((state) => ({
    posts: state.posts.map(post => 
      post.id === id ? { ...post, ...updatedPost } : post
    )
  })),
  likePost: (id) => set((state) => ({
    posts: state.posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    )
  })),
  addComment: (postId, comment) => set((state) => ({
    posts: state.posts.map(post =>
      post.id === postId ? {
        ...post,
        comments: [
          ...post.comments,
          {
            ...comment,
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0],
            replies: []
          }
        ]
      } : post
    )
  })),
  addReply: (postId, commentId, reply) => set((state) => ({
    posts: state.posts.map(post =>
      post.id === postId ? {
        ...post,
        comments: post.comments.map(comment =>
          comment.id === commentId ? {
            ...comment,
            replies: [
              ...comment.replies,
              {
                ...reply,
                id: Date.now().toString(),
                date: new Date().toISOString().split('T')[0]
              }
            ]
          } : comment
        )
      } : post
    )
  }))
}));