import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';

export function CreatePost() {
  const [content, setContent] = useState('');

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-start space-x-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows={3}
          />
          <div className="mt-2 flex justify-between items-center">
            <button className="text-gray-500 hover:text-blue-500">
              <Image className="h-5 w-5" />
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center"
              disabled={!content.trim()}
            >
              <Send className="h-4 w-4 mr-2" />
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}