import React, { useEffect, useState, useRef } from 'react';
import { Socket } from 'socket.io-client';
import { CiLocationArrow1 } from "react-icons/ci";
import Image from 'next/image';

interface Message {
  id: number;
  content: string;
  sender: string;
  isSystem: boolean;
  createdAt: string;
}

interface ChatWindowProps {
  socket: Socket | null;
  userId: number;
  sessionId: number | null;
}

const ChatWindow = ({ socket, userId, sessionId }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [sessionTitle, setSessionTitle] = useState<string>('');
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  
  const keepChatAtBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (!socket || !sessionId) return;

    socket.emit('getChatHistory', { sessionId });

    const handleChatHistory = (data: { messages: Message[], title: string }) => {
      setMessages(data.messages);
      setSessionTitle(data.title);
      keepChatAtBottom();
    };

    const handleNewMessage = (message: Message) => {
      setMessages(prev => [...prev, message]);
      keepChatAtBottom();
    };

    socket.on('chatHistory', handleChatHistory);
    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('chatHistory', handleChatHistory);
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket, sessionId]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 6 * 24)}px`;
    }
  }, [newMessage]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !socket || !sessionId) return;

    socket.emit('sendMessage', {
      sessionId,
      userId,
      content: newMessage,
      isSystem: false
    });

    setNewMessage('');
  };

  function capitalizeFirstLetter(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase();
  }

  if (!sessionId) {
      return (
        <div className="flex-1 h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
          <div className="text-center p-8 max-w-md">
            <Image src="/chat.svg" alt="QuickPing Logo" width={40} height={40} className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center text-blue-500 text-3xl font-bold mx-auto mb-6 p-2" />
            <h2 className="text-2xl font-bold mb-2">Welcome to QuickPing!</h2>
            <p className="text-gray-600 mb-8">Select a conversation to start messaging or create a new one.</p>
          </div>
        </div>
      );
    }

    return (
        <div className='flex-1 flex flex-col overflow-hidden h-screen w-full sm:max-w-[calc(100%-400px)]'>
            <div className="px-4 py-3 border-b border-blue-400 bg-teal-400 flex items-center rounded-b-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center font-extrabold text-xl bg-blue-500 rounded-full mr-3 ml-6 sm:ml-0">
                {capitalizeFirstLetter(sessionTitle)}
                </div>
                <div>
                <h2 className="font-medium text-lg">{sessionTitle}</h2>
                <p className="text-sm text-gray-500">{messages.length} messages</p>
                </div>
            </div>

                  <div
                    ref={messagesContainerRef}
                    className="flex flex-col overflow-y-auto py-4 bg-gray-50 pb-[73px]"
                  >
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex w-full ${message.sender === "User" ? 'justify-end' : 'justify-start'} mb-4`}
                      >
                        {message.sender === "User" && (
                          <div className="flex max-w-[60%] sm:max-w-[80%] hover:cursor-pointer">
                            <div className="py-2 px-4 max-w-[calc(100%-40px)] rounded-xl gap-1 flex bg-blue-500 text-white">
                              <p className="max-w-[80%] sm:max-w-[90%] break-words">{message.content}</p>
                              <p className="text-xs text-blue-100 text-right flex items-end justify-end">
                                {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                            <Image src="/Profile.jpeg" alt="QuickPing Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full scale-75" />
                          </div>
                        )}
            
                        {message.sender !== "User" && (
                          <div className="flex max-w-[60%] sm:max-w-[80%] hover:cursor-pointer">
                            <Image src="/chat.svg" alt="QuickPing Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 scale-75 rounded-xl p-2 bg-blue-500" />
                            <div className={`py-2 px-4 max-w-[calc(100%-40px)] rounded-xl flex gap-1 ${message.isSystem ? 'bg-gray-200' : 'bg-blue-100'}`}>
                              <p className="text-gray-800 max-w-[80%] sm:max-w-[90%] break-words">{message.content}</p>
                              <p className="text-xs text-gray-500 flex items-end justify-end">
                                {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                    <div className="p-2 border-t max-h-[200px] border-gray-200 rounded-t-xl mt-auto fixed bottom-0 w-full sm:max-w-[calc(100%-400px)] bg-white">
                      <form onSubmit={handleSendMessage} className="flex space-x-2 h-full">
                      <textarea
                        ref={textAreaRef}
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage(e);
                          }
                        }}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-100 rounded-t-xl py-2 px-4 mr-1 sm:py-4 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-y-auto"
                        rows={1}
                        style={{ maxHeight: "144px", lineHeight: "24px" }}
                        ></textarea>
                        <button
                          type="submit"
                          className="text-white m-2"
                        >
                          <CiLocationArrow1 className="m-1 w-[19px] h-[22px] scale-[2] bg-blue-500 hover:bg-blue-600 rounded-full p-1" />
                        </button>
                      </form>
                    </div>
            </div>
    );
}
export default ChatWindow;