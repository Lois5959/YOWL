import type { Member } from '../types';
import Avatar from './Avatar';

interface FeedProps {
  onJoin: (user: Member) => void;
}

const users: Member[] = [
  { id: 1, name: "Oles", gym: "Basic Fit, 888 rue du havre", activity: "Séance dos" },
  { id: 2, name: "Marius", gym: "Basic fit, 85 Rue Nationale", activity: "Seance pec" },
  { id: 3, name: "Sacha", gym: "Fitnesspark, 78 rue du metro", activity: "Seance jambe" },
  { id: 4, name: "Loïs", gym: "Basic fit, 85 Rue Nationale", activity: "Seance juice" },
];

export default function Feed({ onJoin }: FeedProps) {

  return (
    <div className="flex-1 h-full p-8 overflow-y-auto">
      <h2 className="text-white text-2xl font-bold mb-6 drop-shadow-md">Live Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-3xl p-5 shadow-xl flex flex-col justify-between">
            <div className="flex items-start gap-4 mb-4">
              <Avatar name={user.name} size={64} />
              <div>
                <h3 className="font-bold text-xl text-black">{user.name}</h3>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1 space-y-1">
                    <li>{user.gym}</li>
                    <li>{user.activity}</li>
                </ul>
              </div>
            </div>

            <button
                onClick={() => onJoin(user)}
                className="w-full bg-[#2D427B] text-white font-bold py-2 rounded-lg hover:bg-[#1e2e58] transition-colors mt-auto cursor-pointer"
            >
              Rejoindre
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
