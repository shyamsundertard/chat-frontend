import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar/>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Careers at QuickPing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our team and help us build the future of communication.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Why Work With Us?</h3>
              <p className="text-gray-600">
                At QuickPing, we value innovation, collaboration, and a passion for creating great products. Join us and be part of a team that’s making a difference.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Open Positions</h3>
              <p className="text-gray-600">
                We’re always looking for talented individuals to join our team. Check out our current openings below.
              </p>
              <ul className="mt-4 space-y-2">
                <li><Link href="/careers/frontend-engineer" className="text-blue-500 hover:text-blue-700 transition">Frontend Engineer</Link></li>
                <li><Link href="/careers/backend-engineer" className="text-blue-500 hover:text-blue-700 transition">Backend Engineer</Link></li>
                <li><Link href="/careers/product-designer" className="text-blue-500 hover:text-blue-700 transition">Product Designer</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}