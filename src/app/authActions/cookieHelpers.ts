"use server"

import { cookies } from 'next/headers'

export async function setAuthCookie(token: string) {
  (await cookies()).set({
    name: 'strapi_jwt',
    value: token,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
  })
}

export async function removeAuthCookie() {
  (await cookies()).delete('strapi_jwt')
}