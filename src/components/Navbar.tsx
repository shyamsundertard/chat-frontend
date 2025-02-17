import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
        <nav className="container mx-auto px-6 py-4 border-b-[1px] border-gray-300 rounded-lg">
        <div className="flex justify-between items-center">
            <Link
            href="/QuickPing"
            className="flex items-center gap-2">
            <Image src="/chat.svg" alt="QuickPing Logo" width={40} height={40} className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold mr-2 p-[6px]" />
            <span className="text-xl font-bold scale-125 text-gray-800">QuickPing</span>
            </Link>
            <div className="flex items-center space-x-4">
            <Link href="/auth/signin" className="text-blue-500 hover:text-blue-700 transition">
                Log in
            </Link>
            <Link href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition">
                Sign up
            </Link>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar