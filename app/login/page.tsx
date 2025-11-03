"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")

  async function onSubmit(e: any) {
    e.preventDefault()
    const res = await signIn("credentials", { redirect: false, email, password })
    if (res?.ok) {
      router.push("/dashboard")
    } else {
      setErr("Invalid login")
    }
  }

  return (
    <main className="mx-auto max-w-sm p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Log In</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full rounded border border-zinc-700 bg-zinc-900 p-2"
          placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <input className="w-full rounded border border-zinc-700 bg-zinc-900 p-2"
          placeholder="Password" type="password"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        {err && <p className="text-sm text-red-400">{err}</p>}
        <button className="w-full rounded bg-white/10 p-2">Log In</button>
      </form>
      <a className="text-sm text-zinc-400" href="/signup">Need an account?</a>
    </main>
  )
}
