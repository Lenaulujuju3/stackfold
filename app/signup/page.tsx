"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [msg, setMsg] = useState("")

  async function onSubmit(e: any) {
    e.preventDefault()
    setMsg("Creating account...")
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    })
    const data = await res.json()
    if (res.ok) {
      setMsg("Account created. Redirecting…")
      setTimeout(() => router.push("/login"), 800)
    } else {
      setMsg(data.error || "Failed")
    }
  }

  return (
    <main className="mx-auto max-w-sm p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Create Account</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full rounded border border-zinc-700 bg-zinc-900 p-2"
          placeholder="Name"
          value={name} onChange={e => setName(e.target.value)}
        />
        <input className="w-full rounded border border-zinc-700 bg-zinc-900 p-2"
          placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <input className="w-full rounded border border-zinc-700 bg-zinc-900 p-2"
          placeholder="Password" type="password"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        {msg && <p className="text-sm text-zinc-300">{msg}</p>}
        <button className="w-full rounded bg-white/10 p-2">Sign Up</button>
      </form>
      <a className="text-sm text-zinc-400" href="/login">Already have an account?</a>
    </main>
  )
}
