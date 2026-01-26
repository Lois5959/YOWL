import React from 'react';

interface SidebarProps {
  setPage: (page: string) => void;
}

export function Sidebar({ setPage }: SidebarProps) {
  const menuItems = [
    { label: "Accueil", icon: "🏠", id: "feed" },
    { label: "Membres", icon: "👥", id: "feed" },
    { label: "Poster", icon: "➕", id: "feed" },
    { label: "Message", icon: "💬", id: "message" },
    { label: "Profil", icon: "👤", id: "feed" },
  ];

  return (
    <aside className="w-32 pt-10 flex flex-col gap-4 pl-4 sticky top-20 h-[calc(100vh-80px)]">
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => setPage(item.id)}
          className="
            bg-[#2D427B] hover:bg-[#1e2e58] text-white
            py-4 px-6
            flex flex-col items-center justify-center
            shadow-lg transition-transform hover:scale-105 origin-left

            rounded-3xl  /* CORRECTION ICI : Arrondi des 4 côtés */
          "
        >
          <span className="text-2xl mb-1">{item.icon}</span>
          <span className="font-semibold">{item.label}</span>
        </button>
      ))}
    </aside>
  )
}
