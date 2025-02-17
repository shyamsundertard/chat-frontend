'use client'

import { useState } from "react"
import Link from "next/link"
import { strapiCredentialLogin } from "@/app/authActions/actions"
import { setAuthCookie } from "@/app/authActions/cookieHelpers"
import { useRouter } from "next/navigation"
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi"
import toast, { Toaster } from "react-hot-toast"
import Image from "next/image"

export function LoginForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const router = useRouter()
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address")
      setLoading(false)
      return
    }

    try {   
      const result = await strapiCredentialLogin({email, password})

      if (!result?.ok) {
        toast.error(result?.error as string)
        setLoading(false)
        return
      }

      await setAuthCookie(result.response?.jwt)
      toast.success("Logged-in successfully!")
      setTimeout(() => {
        router.push('/')
      }, 1500)
      

    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      } else {
        toast.error('An unexpected error occurred')
      }
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-center bg-blue-500 py-4">
          <Image src="/chat.svg" alt="QuickPing Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl font-bold text-white">QuickPing</span>
        </div>
        
        <div className="px-8 py-8 sm:px-12">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            Log in to your account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiMail />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="appearance-none block w-full px-3 py-3 pl-10 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiLock />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="appearance-none block w-full px-3 py-3 pl-10 pr-10 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500 transition"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link href="/forgot-password" className="text-blue-500 hover:text-blue-700 font-medium transition">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Logging in...' : 'Log in'}
              </button>
            </div>
          </form>
          
          <div className="text-center mt-8 text-sm">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-blue-500 hover:text-blue-700 font-medium transition">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}