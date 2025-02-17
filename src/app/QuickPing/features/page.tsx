import React from 'react';
import { FiMessageCircle, FiUsers, FiShield } from 'react-icons/fi';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar/>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the powerful features of QuickPing that make communication seamless and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
              <FiMessageCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Messaging</h3>
            <p className="text-gray-600">
              Send and receive messages in real-time with minimal latency, keeping conversations flowing naturally.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
              <FiUsers size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
            <p className="text-gray-600">
              Create channels for teams, projects, or friends. Organize your conversations efficiently.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mb-4">
              <FiShield size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
            <p className="text-gray-600">
              Your messages are secure with our advanced encryption. Only you and your recipients can read them.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}