import React from 'react';
import Link from 'next/link';
import { FiMessageCircle, FiUsers, FiShield, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function QuickPingHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="container mx-auto px-6 py-4 border-b-[1px] border-gray-300 rounded-lg">
        <div className="flex justify-between items-center">
          <Link
            href="/QuickPing"
            className="flex items-center gap-2">
            <Image src="/chat.svg" alt="QuickPing Logo" width={40} height={40} className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold mr-2 p-[6px]" />
            <span className="text-xl font-bold scale-125 text-gray-800">QuickPing</span>
            </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-500 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-500 transition">How it works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-500 transition">Testimonials</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/register" className="text-blue-500 hover:text-blue-700 transition hidden sm:block">
              Sign up
            </Link>
            <Link href="/auth/signin" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition">
              Log in
            </Link>
          </div>
        </div>
      </nav>
      
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Connect instantly with QuickPing chat
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Fast, secure, and reliable messaging for teams and friends. Stay connected anywhere, anytime.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-center transition">
                Get started for free
              </Link>
              <Link href="/QuickPing/pricing" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full text-center transition">
                Learn more
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-4 max-w-md mx-auto">
                <div className="flex items-center border-b pb-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
                    <FiUsers size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Team Chat</h3>
                    <p className="text-sm text-gray-500">8 members active</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-xs">
                      <p className="text-sm">Hey team, has anyone started on the new project?</p>
                      <span className="text-xs text-gray-500 mt-1 block">10:12 AM</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-xs">
                      <p className="text-sm">I&apos;ve prepared some initial mockups we can review</p>
                      <span className="text-xs text-gray-500 mt-1 block">10:15 AM</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-end">
                    <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 max-w-xs">
                      <p className="text-sm">Great! Let&apos;s schedule a meeting to go over them</p>
                      <span className="text-xs text-blue-200 mt-1 block">10:16 AM</span>
                    </div>
                    <div className="w-8 h-8 bg-blue-200 rounded-full ml-3 flex-shrink-0"></div>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="w-full bg-gray-100 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600">
                    <FiArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="features" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why choose QuickPing?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to make communication seamless and secure
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
        </div>
      </section>
      
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How QuickPing Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started is easy - be up and running in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Create your account in seconds. Only an email and password required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Invite Friends</h3>
              <p className="text-gray-600">
                Add contacts and create groups with your team or friends.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Chatting</h3>
              <p className="text-gray-600">
                Begin conversations instantly on any device, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied users about their experience with QuickPing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
              <p className="text-gray-600 mb-4">
                &quot;QuickPing has transformed the way our team communicates. It&apos;s fast, reliable, and secure!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
                  <span className="text-sm font-bold">A</span>
                </div>
                <div>
                  <h3 className="font-semibold">Alice Johnson</h3>
                  <p className="text-sm text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
              <p className="text-gray-600 mb-4">
                &quot;The end-to-end encryption gives me peace of mind. Highly recommend QuickPing!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-3">
                  <span className="text-sm font-bold">B</span>
                </div>
                <div>
                  <h3 className="font-semibold">Bob Smith</h3>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
              <p className="text-gray-600 mb-4">
                &quot;QuickPing is so easy to use. It has made remote collaboration a breeze.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mr-3">
                  <span className="text-sm font-bold">C</span>
                </div>
                <div>
                  <h3 className="font-semibold">Charlie Brown</h3>
                  <p className="text-sm text-gray-500">Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-blue-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to get started?</h2>
          <Link href="/signup" className="bg-white text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium inline-block transition">
            Create your free account
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}