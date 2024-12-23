import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Feed } from './components/feed/Feed';
import { Suggestions } from './components/sidebar/Suggestions';
import { Post, User } from './types';

const demoUser: User = {
  id: '1',
  username: 'johndoe',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: 'Software Developer',
  followers: 1234,
  following: 567
};

const initialPosts: Post[] = [
  {
    id: '1',
    author: demoUser,
    content: 'Just launched my new project! Check it out 🚀',
    images: ['https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80'],
    likes: 42,
    comments: [
      {
        id: '1',
        author: {
          ...demoUser,
          id: '2',
          username: 'janedoe',
          name: 'Jane Doe'
        },
        content: 'This looks amazing! 🎉',
        createdAt: '2024-03-15T10:30:00Z',
        likes: 5
      }
    ],
    createdAt: '2024-03-15T10:00:00Z',
    hasLiked: false
  }
];

const suggestedUsers: User[] = [
  {
    id: '2',
    username: 'janedoe',
    name: 'Jane Doe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'UX Designer',
    followers: 2345,
    following: 678
  }
];

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleLikePost = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.hasLiked ? post.likes - 1 : post.likes + 1,
          hasLiked: !post.hasLiked
        };
      }
      return post;
    }));
  };

  const handleFollow = (userId: string) => {
    // Handle follow logic
    console.log('Following user:', userId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Feed posts={posts} onLikePost={handleLikePost} />
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-20">
              <Suggestions users={suggestedUsers} onFollow={handleFollow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;