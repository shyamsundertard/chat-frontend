import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar/>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            By using QuickPing, you agree to our terms and conditions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Acceptance of Terms</h3>
            <p className="text-gray-600">
              By accessing or using the QuickPing service, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Use of the Service</h3>
            <p className="text-gray-600">
              You agree to use the QuickPing service only for lawful purposes and in accordance with these Terms of Service. You are responsible for all activities that occur under your account.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Termination</h3>
            <p className="text-gray-600">
              We may terminate or suspend your access to the QuickPing service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}