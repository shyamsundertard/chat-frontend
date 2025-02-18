"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import io, { Socket } from "socket.io-client";
import { IoMdArrowRoundBack } from "react-icons/io";

const ChatPage = ({ userId }: { userId: number }) => {
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeComponent, setActiveComponent] = useState<"sidebar" | "chat">("sidebar");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const socket = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
    setSocket(socket);

    const handleSessionSelected = (data: { id: number }) => {
      setSelectedSessionId(data.id);
      if (isSmallScreen) setActiveComponent("chat");
    };

    socket.on("sessionSelected", handleSessionSelected);

    return () => {
      socket.off("sessionSelected", handleSessionSelected);
      socket.disconnect();
    };
  }, [isSmallScreen]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {(!isSmallScreen || activeComponent === "sidebar") && (
        <Sidebar
          userId={userId}
          socket={socket}
          onSessionSelect={(id) => {
            setSelectedSessionId(id);
            if (isSmallScreen) setActiveComponent("chat");
          }}
        />
      )}

      {(!isSmallScreen || activeComponent === "chat") && (
        <ChatWindow
          socket={socket}
          userId={userId}
          sessionId={selectedSessionId}
        />
      )}

      {isSmallScreen && activeComponent === "chat" && (
        <button
          onClick={() => setActiveComponent("sidebar")}
          className="absolute top-[17px] left-[3px] px-3 py-1"
        >
          <IoMdArrowRoundBack size={30} className='pr-2'/>
        </button>
      )}
    </div>
  );
};

export default ChatPage;
