"use server"

import { cookies } from 'next/headers'

export async function setAuthCookie(token: string) {
  (await cookies()).set({
    name: 'strapi_jwt',
    value: token,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
}

export async function getAuthCookie() {
  return (await cookies()).get('strapi_jwt')?.value
}

export async function removeAuthCookie() {
  (await cookies()).delete('strapi_jwt')
}