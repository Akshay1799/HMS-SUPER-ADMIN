"use client";

import React from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import { ROUTES } from "@/constants/routes";

export default function HomePage() {
  const { isAuthenticated } = useAuthStore();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-radial from-slate-900 via-zinc-950 to-black px-6 py-12 text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl" />

      {/* Main container */}
      <div className="relative z-10 w-full max-w-4xl rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-xl md:p-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
              Super Admin Portal Foundation Ready
            </div>
            <Link
              href="/design-system"
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 px-4 py-1.5 text-sm font-semibold text-sky-400 transition-colors"
            >
              Explore Design System Showcase →
            </Link>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Hospital Chain Management System
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            The next-generation, multi-tenant governance platform configured with Next.js 15, TypeScript, and Tailwind CSS v4.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {isAuthenticated ? (
              <Link
                href={ROUTES.dashboard}
                className="h-11 px-6 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/95 transition-colors flex items-center justify-center cursor-pointer"
              >
                Go to Governance Dashboard
              </Link>
            ) : (
              <Link
                href={ROUTES.login}
                className="h-11 px-6 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/95 transition-colors flex items-center justify-center cursor-pointer"
              >
                Log In to Governance
              </Link>
            )}
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { name: "Next.js 15", desc: "App Router", color: "from-blue-600 to-indigo-600" },
            { name: "TypeScript", desc: "Type Safe", color: "from-indigo-600 to-violet-600" },
            { name: "Tailwind CSS v4", desc: "Styling Engine", color: "from-violet-600 to-fuchsia-600" },
            { name: "TanStack & Zustand", desc: "State & Query", color: "from-fuchsia-600 to-pink-600" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 p-5 transition-all duration-300 hover:scale-105 hover:border-zinc-700/80"
            >
              <div>
                <h3 className="font-semibold text-white">{tech.name}</h3>
                <p className="mt-1 text-xs text-zinc-400">{tech.desc}</p>
              </div>
              <div className="mt-4 h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div className={`h-full w-full bg-gradient-to-r ${tech.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Modules Map Preview */}
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
          <h3 className="text-lg font-semibold text-zinc-200">System Governance Architecture</h3>
          <p className="text-xs text-zinc-500 mt-1">Multi-tenant hierarchy & administration scope</p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Dashboard",
              "Tenant Management",
              "Hospital Management",
              "Identity & Access",
              "Clinical Oversight",
              "Revenue",
              "Notifications",
              "Integrations",
              "Monitoring",
              "Audit Center",
              "Reports",
              "Settings"
            ].map((module) => (
              <span
                key={module}
                className="inline-flex items-center rounded-lg bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:border-violet-500/50 hover:bg-zinc-800"
              >
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-violet-500" />
                {module}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
