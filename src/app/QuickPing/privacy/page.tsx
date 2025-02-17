import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar/>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect your information.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
            <p className="text-gray-600">
              We collect information to provide better services to all our users. This includes information you provide directly, such as your name and email address, as well as information we collect automatically, such as your IP address and usage data.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">How We Use Information</h3>
            <p className="text-gray-600">
              We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect QuickPing and our users.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Information We Share</h3>
            <p className="text-gray-600">
              We do not share personal information with companies, organizations, or individuals outside of QuickPing except in the following cases: with your consent, for external processing, or for legal reasons.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}