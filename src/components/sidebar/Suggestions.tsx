import React from 'react';
import { User } from '../../types';

interface SuggestionsProps {
  users: User[];
  onFollow: (userId: string) => void;
}

export function Suggestions({ users, onFollow }: SuggestionsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-gray-900 mb-4">Suggested for you</h2>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>
            <button
              onClick={() => onFollow(user.id)}
              className="px-4 py-1 text-sm font-medium text-blue-500 hover:text-blue-600"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}