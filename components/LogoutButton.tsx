"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="rounded bg-white/10 px-3 py-2 text-sm"
    >
      Log out
    </button>
  )
}
