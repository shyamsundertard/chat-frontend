"use server"

import { removeAuthCookie } from './cookieHelpers'

export async function logout() {
  await removeAuthCookie()
  return { ok: true }
}