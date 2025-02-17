import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar/>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start for free, upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-4">Free</h3>
            <p className="text-gray-600 mb-6">Perfect for individuals and small teams</p>
            <p className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-500">/month</span></p>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-600">Up to 10 users</li>
              <li className="text-gray-600">Basic features</li>
              <li className="text-gray-600">Limited storage</li>
            </ul>
            <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-center block transition">
              Get started
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-gray-600 mb-6">For growing teams and businesses</p>
            <p className="text-4xl font-bold mb-6">$9<span className="text-lg text-gray-500">/month</span></p>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-600">Up to 50 users</li>
              <li className="text-gray-600">Advanced features</li>
              <li className="text-gray-600">1TB storage</li>
            </ul>
            <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-center block transition">
              Get started
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-6">For large organizations</p>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-600">Unlimited users</li>
              <li className="text-gray-600">All features</li>
              <li className="text-gray-600">Unlimited storage</li>
            </ul>
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-center block transition">
              Contact us
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}