import Sidebar from '../components/Sidebar'
// 1. IMPORT IMPORTANT : On ramène ta Carte ici
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* La Sidebar (Fixe à gauche) */}
      <Sidebar />

      {/* Le Contenu Principal (Décalé vers la droite) */}
      <div className="ml-64 flex-1 p-8">

        {/* Header du contenu */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black">Live Feed</h2>
          <button className="bg-white text-orange-500 px-4 py-2 rounded-full font-bold shadow hover:bg-gray-50 transition">
            Poster
          </button>
        </div>

        {/* 2. LA GRILLE DE CARTES (C'est ce qu'il te manquait) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

          <Card
            name="Alex"
            gym="Basic Fit Lille"
            activity="Séance Dos"
            time="5 min"
          />

          <Card
            name="Thomas"
            gym="Fitness Park"
            activity="Cherche spotter Bench"
            time="2 min"
          />

          <Card
            name="Sarah"
            gym="Basic Fit Paris"
            activity="Séance Jambes"
            time="10 min"
          />

          <Card
            name="Marc"
            gym="Keep Cool"
            activity="Spotter Squat"
            time="15 min"
          />

        </div>
        {/* Fin de la grille */}

      </div>
    </div>
  )
}
