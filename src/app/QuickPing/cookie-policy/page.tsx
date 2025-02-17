import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar/>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how we use cookies to improve your experience on QuickPing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">What Are Cookies?</h3>
            <p className="text-gray-600">
              Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">How We Use Cookies</h3>
            <p className="text-gray-600">
              We use cookies to enhance your experience on QuickPing, to understand how you use our service, and to improve our offerings. Cookies help us remember your preferences and provide you with a personalized experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Managing Cookies</h3>
            <p className="text-gray-600">
              You can control and manage cookies in various ways. Please note that disabling cookies may affect your experience on QuickPing and limit the functionality of certain features.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}