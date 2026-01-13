export default function Card({ name, gym, activity, time }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
      {/* En-tête de la carte */}
      <div className="flex items-start gap-3">
        {/* Faux Avatar (Rond gris) */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>

        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{gym}</p>
          <p className="text-sm font-semibold mt-1">• {activity}</p>
          <p className="text-xs text-gray-400">- {time}</p>
        </div>
      </div>

      {/* Bouton Rejoindre */}
      <button className="mt-2 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition">
        Rejoindre
      </button>
    </div>
  )
}
