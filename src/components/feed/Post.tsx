import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Post as PostType } from '../../types';
import { formatTimeAgo } from '../../utils/date';

interface PostProps {
  post: PostType;
  onLike: (postId: string) => void;
}

export function Post({ post, onLike }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow mb-4">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{post.author.name}</h3>
              <p className="text-sm text-gray-500">{formatTimeAgo(post.createdAt)}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
        
        <p className="mt-3">{post.content}</p>
        
        {post.images && post.images.length > 0 && (
          <div className="mt-3">
            <img
              src={post.images[0]}
              alt="Post content"
              className="rounded-lg w-full"
            />
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center space-x-2 ${
              post.hasLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <Heart className={`h-5 w-5 ${post.hasLiked ? 'fill-current' : ''}`} />
            <span>{post.likes}</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments.length}</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {post.comments.length > 0 && (
        <div className="border-t border-gray-100 p-4">
          {post.comments.slice(0, 2).map((comment) => (
            <div key={comment.id} className="flex space-x-3 mb-3">
              <img
                src={comment.author.avatar}
                alt={comment.author.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <p>
                  <span className="font-semibold">{comment.author.name}</span>{' '}
                  {comment.content}
                </p>
                <p className="text-sm text-gray-500">
                  {formatTimeAgo(comment.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}