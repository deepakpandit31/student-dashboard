import Sidebar from "@/components/layout/Sidebar";
import BentoGrid from "@/components/dashboard/BentoGrid";
import { supabase } from "@/lib/supabase/client";
import MobileNav from "@/components/layout/MobileNav";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        Failed to load courses.
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-black text-white">      <Sidebar />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
     <section className="relative z-10 flex-1 p-6 pb-24 md:pb-6">
        <h1 className="text-3xl font-bold">
          Welcome back, Deepak 👋
        </h1>

        <BentoGrid courses={courses || []} />
      </section>
      <MobileNav />
    </main>
  );
}