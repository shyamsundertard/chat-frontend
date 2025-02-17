import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar/>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About QuickPing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our mission, vision, and the team behind QuickPing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                At QuickPing, our mission is to provide a fast, secure, and reliable messaging platform that connects people seamlessly.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                We envision a world where communication is effortless, secure, and accessible to everyone, everywhere.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">
                QuickPing is built by a passionate team of developers, designers, and communication experts dedicated to making your messaging experience better.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}