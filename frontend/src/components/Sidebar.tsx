export default function Sidebar() {
  return (
    <div className="w-64 bg-black text-white h-screen flex flex-col p-4 fixed left-0 top-0">
      <h1 className="text-2xl font-bold text-orange-500 mb-10">Basic Connect</h1>

      <nav className="flex flex-col gap-4">
        <a href="#" className="bg-orange-500 text-white p-3 rounded-lg font-bold">🏠 Accueil</a>
        <a href="#" className="hover:text-orange-500 p-2">👥 Membres</a>
        <a href="#" className="hover:text-orange-500 p-2">➕ Poster</a>
        <a href="#" className="hover:text-orange-500 p-2">💬 Messages</a>
        <a href="#" className="hover:text-orange-500 p-2">👤 Profil</a>
      </nav>
    </div>
  )
}
