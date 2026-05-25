export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="
            h-52
            animate-pulse
            rounded-3xl
            bg-zinc-900
            "
          />
        ))}
      </div>
    </main>
  );
}