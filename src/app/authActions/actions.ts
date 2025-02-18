"use server"

interface LoginCredentials {
  email: string
  password: string
}

export async function strapiCredentialLogin({ email, password }: LoginCredentials) {
  try {
    const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1337'
    
    const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
      cache: 'no-store',
    })

    const data = await response.json()

    if (!response.ok) {
      const errorMessage = data.error?.message || 'Authentication failed'
      
      switch (errorMessage) {
        case 'Invalid identifier or password':
          return {
            error: 'Invalid credentials!',
            ok: false
          }
        case 'Your account email is not confirmed':
          return {
            error: 'Email not verified! Please verify first.',
            ok: false
          }
        default:
          return {
            error: errorMessage,
            ok: false
          }
      }
    }

    return {
      response: {
        user: data.user,
        jwt: data.jwt
      },
      ok: true
    }
    
  } catch (error) {
    console.error("Unexpected error during Strapi login:", error)
    return {
      error: "Something went wrong",
      ok: false
    }
  }
}