"use client";

import {
    Home,
    BookOpen,
    BarChart3,
    Settings,
} from "lucide-react";

const items = [
    {
        icon: Home,
    },
    {
        icon: BookOpen,
    },
    {
        icon: BarChart3,
    },
    {
        icon: Settings,
    },
];

export default function MobileNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-zinc-800 bg-zinc-950 p-4 md:hidden">
            {items.map((item, i) => {
                const Icon = item.icon;

                return (
                    <button key={i}>
                        <Icon
                            size={22}
                            className="text-zinc-400"
                        />
                    </button>
                );
            })}
        </nav>
    );
}