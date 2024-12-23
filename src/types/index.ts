export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  images?: string[];
  likes: number;
  comments: Comment[];
  createdAt: string;
  hasLiked: boolean;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  createdAt: string;
  likes: number;
}