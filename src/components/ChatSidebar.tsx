import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Socket } from 'socket.io-client';
import { CiLogout, CiMenuKebab } from "react-icons/ci";
import { IoIosAdd } from 'react-icons/io';
import { logout } from '@/app/authActions/logout';
import toast, { Toaster } from 'react-hot-toast';

interface ChatSession {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface SidebarProps {
  userId: number;
  socket: Socket | null;
  onSessionSelect: (sessionId: number) => void;
}

const Sidebar = ({ userId, socket, onSessionSelect }: SidebarProps) => {
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [newChatTitle, setNewChatTitle] = useState<string>('');
  const [showNewChatInput, setShowNewChatInput] = useState(false);
  const [username, setUsername] = useState<string>('');
  
  useEffect(() => {
    if (!socket) {
      return;
    };
    console.log("socket: ", socket.id)

    const fetchChatSessions = () => {
      socket.emit('getChatSessions', { userId });
    };

    fetchChatSessions();

    const fetchUsername = () => {
      socket.emit('getUsername', { userId });
    };

    fetchUsername();
    
    const handleChatSessionsList = (sessions: ChatSession[]) => {
      setChatSessions(sessions);
    };

     const handleConnect = () => {
      fetchChatSessions();
      fetchUsername();
    };
    
    const handleNewChatSession = (session: ChatSession) => {
      session.id = session.id-1;
      setChatSessions(prev => [session, ...prev]);
    };

    const handleUsernameResponse = (data: { username: string }) => {
      setUsername(data.username);
    };
    
    socket.on('connect', handleConnect);
    socket.on('chatSessionsList', handleChatSessionsList);
    socket.on('newChatSession', handleNewChatSession);
    socket.on('usernameResponse', handleUsernameResponse);
    
    return () => {
      socket.off('connect', handleConnect);
      socket.off('chatSessionsList', handleChatSessionsList);
      socket.off('newChatSession', handleNewChatSession);
      socket.off('usernameResponse', handleUsernameResponse);
    };
  }, [onSessionSelect, socket, userId]);

  const handleLogOut = () => {
    const toastId = toast.loading("Logging out...");
    setTimeout(() => {
        logout();
        toast.success("Logged-out successfully");
        toast.dismiss(toastId);
    }, 1500);
};

  const handleCreateChatSession = () => {
    if (!newChatTitle || !socket) {
      alert('Please enter a title for the new chat session');
      return;
    }

    socket.emit('createChatSession', { 
      userId, 
      title: newChatTitle 
    });
    
    setNewChatTitle('');
    setShowNewChatInput(false);
  
  };

  function capitalizeFirstLetter(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase();
  }

  return (
    <div className="w-full sm:w-[400px] bg-white border-r-[2px] border-gray-200 h-screen flex flex-col rounded-lg">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between rounded-lg">
        <div className="flex items-center">
          <Image src="/chat.svg" alt="Logo" width={40} height={40} className="mr-2 bg-blue-500 rounded-xl p-[6px] flex" />
          <h1 className="text-xl font-semibold">QuickPing</h1>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <CiMenuKebab size={25} style={{ strokeWidth: 1 }}/>
        </button>
      </div>
      <Toaster/>

      <div className="p-4 flex space-x-2">
        <div className="relative flex-1 flex-row justify-center">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          onClick={() => setShowNewChatInput(!showNewChatInput)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          title="Create New Chat"
        >
          <IoIosAdd size={25} style={{ scale: 1.3 }}/>
        </button>
      </div>

      {showNewChatInput && (
        <div className="px-4 pb-4 -mt-2">
          <div className="relative">
            <input
              type="text"
              value={newChatTitle}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleCreateChatSession();
                }
              }}
              onChange={(e) => setNewChatTitle(e.target.value)}
              placeholder="Enter new chat title..."
              className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
          <div className="flex mt-2 space-x-2">
            <button
              onClick={handleCreateChatSession}
              className="flex-1 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create
            </button>
            <button
              onClick={() => {
                setShowNewChatInput(false);
                setNewChatTitle('');
              }}
              className="flex-1 p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        {chatSessions.map((session) => (
          <div
            key={session.id}
            className="p-4 border-b border-gray-200 hover:bg-gray-200 cursor-pointer bg-gray-100 rounded-md"
            onClick={() => {
              if (socket) {
                socket.emit('joinChatSession', { 
                  userId, 
                  sessionId: session.id 
                });
                onSessionSelect(session.id);
              }
            }}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 flex justify-center items-center font-extrabold text-xl bg-gray-300 rounded-full mr-3">{capitalizeFirstLetter(session.title)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{session.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mt-1 truncate">
                  Created: {new Date(session.createdAt).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-[10px] border-t border-gray-300 rounded-lg bg-gray-100">
        <div className="flex items-center">
          <Image src="/Profile.jpeg" alt="QuickPing Logo" width={40} height={40} className="mr-2 rounded-full" />
          <div>
            <h3 className="font-medium">{username}</h3>
            <p className="text-xs text-gray-500">Online</p>
          </div>
          <div className="ml-auto">
            <button
            onClick={handleLogOut}
             className="text-gray-500 hover:text-black transition-colors duration-300">
              <CiLogout  style={{ strokeWidth: 1 }}  className='scale-[1.5] hover:text-black'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;