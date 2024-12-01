export interface Comment {
  id: string;
  postId: string;
  content: string;
  author: string;
  date: string;
  replies: Reply[];
}

export interface Reply {
  id: string;
  commentId: string;
  content: string;
  author: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  likes: number;
  comments: Comment[];
}