import React from 'react';
import { Post as PostComponent } from './Post';
import { CreatePost } from './CreatePost';
import { Post } from '../../types';

interface FeedProps {
  posts: Post[];
  onLikePost: (postId: string) => void;
}

export function Feed({ posts, onLikePost }: FeedProps) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <CreatePost />
      {posts.map((post) => (
        <PostComponent key={post.id} post={post} onLike={onLikePost} />
      ))}
    </div>
  );
}