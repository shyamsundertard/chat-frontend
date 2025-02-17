import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar/>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about QuickPing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">What is QuickPing?</h3>
              <p className="text-gray-600">
                QuickPing is a fast, secure, and reliable messaging platform designed for teams and friends to stay connected.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">How do I get started?</h3>
              <p className="text-gray-600">
                Simply sign up for a free account, invite your friends or team members, and start chatting instantly.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Is QuickPing secure?</h3>
              <p className="text-gray-600">
                Yes, QuickPing uses end-to-end encryption to ensure that your messages are secure and private.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Can I use QuickPing on multiple devices?</h3>
              <p className="text-gray-600">
                Absolutely! QuickPing is available on all your devices, so you can stay connected wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}