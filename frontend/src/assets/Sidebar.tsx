export function Sidebar() 

{
  return (
    <aside className="fixed top-0 left-0 h-screen pl-12 flex flex-col">

      <div className="h-20 flex items-center justify-center">
        <span className="text-2xl font-bold text-black">LOGO</span>
      </div>

      <ul className="flex flex-col gap-7 items-center mt-18">
        <li><button className="sidebaricon">Accueil</button></li>
        <li><button className="sidebaricon">Membres</button></li>
        <li><button className="sidebaricon">Poster</button></li>
        <li><button className="sidebaricon">Message</button></li>
        <li><button className="sidebaricon">Profil</button></li>
      </ul>
    </aside>
  )
}
