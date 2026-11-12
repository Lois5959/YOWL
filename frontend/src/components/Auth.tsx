import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { API_URL } from '../api';

interface AuthProps { onLogin: () => void; }

export default function Auth({ onLogin }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ nom: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? '/login' : '/register';

    try {
      const res = await fetch(`${API_URL}/auth${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        if (isLogin) {
            localStorage.setItem('token', data.token);
            onLogin();
        } else {
            alert("Compte créé ! Connecte-toi.");
            setIsLogin(true);
        }
      } else {
        setError(data.message || "Erreur lors de la connexion");
      }
    } catch { setError("Serveur injoignable (vérifie que le backend tourne)"); }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-white z-50">
      <div className="absolute inset-0 bg-[#1e2e58] bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80')] bg-cover brightness-50" />

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md relative z-10">
        <h2 className="text-3xl font-black text-[#2D427B] mb-2 text-center">{isLogin ? 'Bon retour !' : 'Rejoins-nous !'}</h2>

        {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input name="nom" type="text" placeholder="Ton Nom" required onChange={handleChange}
              className="w-full bg-gray-100 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#2D427B]" />
          )}
          <input name="email" type="email" placeholder="Email" required onChange={handleChange}
            className="w-full bg-gray-100 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#2D427B]" />
          <input name="password" type="password" placeholder="Mot de passe" required onChange={handleChange}
            className="w-full bg-gray-100 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#2D427B]" />

          <button type="submit" className="w-full bg-[#2D427B] text-white font-bold py-3 rounded-xl hover:scale-[1.02] shadow-lg mt-2">
            {isLogin ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-6 text-center text-[#2D427B] font-bold hover:underline">
            {isLogin ? "Pas de compte ? Inscris-toi" : "Déjà un compte ? Connecte-toi"}
        </button>
      </div>
    </div>
  );
}
