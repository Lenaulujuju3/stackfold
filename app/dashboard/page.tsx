// app/dashboard/page.tsx
import { getServerSession } from "next-auth"
import { authOptions, prisma } from "@/lib/auth"
import LogoutButton from "@/components/LogoutButton"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return (
      <main className="p-8">
        <h1 className="text-xl">Not signed in.</h1>
        <a href="/login" className="underline">Log in</a>
      </main>
    )
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })

  return (
    <main className="mx-auto max-w-6xl p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-zinc-400">Welcome, {user?.name ?? user?.email}</p>
        </div>
        <LogoutButton />
      </div>

      {/* KPI / Indices Widgets */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-zinc-800 p-5">
          <p className="text-zinc-400 text-sm">Demand Index</p>
          <p className="mt-2 text-3xl font-bold">—</p>
          <p className="text-xs text-zinc-500 mt-2">Last 24h</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 p-5">
          <p className="text-zinc-400 text-sm">Risk Index</p>
          <p className="mt-2 text-3xl font-bold">—</p>
          <p className="text-xs text-zinc-500 mt-2">Last 24h</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 p-5">
          <p className="text-zinc-400 text-sm">Reachability</p>
          <p className="mt-2 text-3xl font-bold">—</p>
          <p className="text-xs text-zinc-500 mt-2">Email/SMS</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 p-5">
          <p className="text-zinc-400 text-sm">Spend Efficiency</p>
          <p className="mt-2 text-3xl font-bold">—</p>
          <p className="text-xs text-zinc-500 mt-2">EPC / CPA</p>
        </div>
      </section>

      {/* Two-column: Purchases/Subscriptions + Campaign Overview */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Purchases & Subscriptions */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-zinc-800 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Purchases</h2>
              <a href="/dashboard/purchases" className="text-sm text-zinc-400 underline">View all</a>
            </div>
            <p className="text-zinc-400 text-sm mt-2">
              Lead packages and indices you’ve bought will appear here.
            </p>
            <ul className="mt-4 space-y-3">
              <li className="rounded-xl border border-zinc-800 p-4 text-zinc-400">
                No purchases yet.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Subscriptions</h2>
              <a href="/dashboard/subscriptions" className="text-sm text-zinc-400 underline">Manage</a>
            </div>
            <p className="text-zinc-400 text-sm mt-2">
              Your active plans (e.g., monthly indices, data access tiers) show here.
            </p>
            <div className="mt-4 rounded-xl border border-zinc-800 p-4">
              <p className="text-zinc-300">Plan</p>
              <p className="text-sm text-zinc-400">{user?.plan ?? "free"}</p>
            </div>
          </div>
        </div>

        {/* Managed Campaigns Overview */}
        <div className="rounded-2xl border border-zinc-800 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Managed Campaigns</h2>
            <a href="/dashboard/campaigns" className="text-sm text-zinc-400 underline">Open</a>
          </div>
          <p className="text-zinc-400 text-sm mt-2">
            If Stackfold runs your marketing (for compliance), your live campaign stats show here.
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-zinc-800 p-4">
              <p className="text-zinc-300">Status</p>
              <p className="text-sm text-zinc-400">No active campaigns</p>
            </div>
            <div className="rounded-xl border border-zinc-800 p-4">
              <p className="text-zinc-300">KPIs</p>
              <ul className="text-sm text-zinc-400 list-disc pl-5">
                <li>EPC —</li>
                <li>CTR —</li>
                <li>Spend —</li>
                <li>Leads —</li>
              </ul>
            </div>
          </div>

          <a
            href="/dashboard/campaigns/start"
            className="inline-block mt-4 rounded-xl border border-zinc-700 px-4 py-2 text-sm"
          >
            Start a managed campaign
          </a>
        </div>
      </section>
    </main>
  )
}
