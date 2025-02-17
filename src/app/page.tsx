import React from 'react';
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import ChatPage from "@/components/ChatPage";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("strapi_jwt")?.value;

  if (!token) {
    return redirect("/auth/signin")
  }

  let userId: number;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: number; };
    userId = decoded.id;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to decode") ;
  }
  return (
    <div className="fixed w-full">
      <ChatPage userId={userId} />;
    </div>
  );
}