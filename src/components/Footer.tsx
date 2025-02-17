import Link from "next/link";
import React from 'react'
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        
<footer className="bg-gray-800 text-gray-300 py-12">
<div className="container mx-auto px-6">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">QuickPing</h3>
      <div className="flex items-center mb-4">
      <Image src="/chat.svg" alt="QuickPing Logo" width={40} height={40} className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold mr-2 p-[6px] scale-90" />
        <span className="text-sm">Stay connected</span>
      </div>
      <p className="text-sm text-gray-400">
        Fast, secure messaging for everyone
      </p>
    </div>

    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
      <ul className="space-y-2">
        <li><Link href="/QuickPing/features" className="text-sm hover:text-white transition">Features</Link></li>
        <li><Link href="/QuickPing/pricing" className="text-sm hover:text-white transition">Pricing</Link></li>
        <li><Link href="/QuickPing/faq" className="text-sm hover:text-white transition">FAQ</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
      <ul className="space-y-2">
        <li><Link href="/QuickPing/about" className="text-sm hover:text-white transition">About</Link></li>
        <li><Link href="/QuickPing/careers" className="text-sm hover:text-white transition">Careers</Link></li>
        <li><Link href="/QuickPing/contact" className="text-sm hover:text-white transition">Contact</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
      <ul className="space-y-2">
        <li><Link href="/QuickPing/privacy" className="text-sm hover:text-white transition">Privacy</Link></li>
        <li><Link href="/QuickPing/terms" className="text-sm hover:text-white transition">Terms</Link></li>
        <li><Link href="/QuickPing/cookie-policy" className="text-sm hover:text-white transition">Cookie Policy</Link></li>
      </ul>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between">
    <p className="text-sm">© {new Date().getFullYear()} QuickPing. All rights reserved.</p>
    <div className="mt-4 md:mt-0">
      <div className="flex space-x-6">
        <a href="https://www.linkedin.com/in/shyamsundertard/" className="text-gray-400 hover:text-white transition">
          <span className="sr-only">LinkerIn</span>
          <FaLinkedin className="scale-[1.5]"/>
        </a>
        <a href="https://github.com/shyamsundertard" className="text-gray-400 hover:text-white transition">
          <span className="sr-only">GitHub</span>
          <FaGithub className="scale-[1.5]"/>
        </a>
      </div>
    </div>
  </div>
</div>
</footer>
    </div>
  )
}

export default Footer
