"use client";

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
        <h1 className="text-2xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-zinc-400">
          Failed to load dashboard data.
        </p>
      </div>
    </main>
  );
}