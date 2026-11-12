// Avatar avec l'initiale du membre : pas de service d'images externe à appeler.
const COLORS = ['#2D427B', '#0E7490', '#7C3AED', '#C2410C', '#15803D', '#BE185D'];

export default function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  const color = COLORS[[...name].reduce((sum, c) => sum + c.charCodeAt(0), 0) % COLORS.length];
  return (
    <div
      aria-hidden="true"
      className="rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 border-2 border-gray-200"
      style={{ width: size, height: size, backgroundColor: color, fontSize: size * 0.4 }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
