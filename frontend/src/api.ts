// En développement, Vite relaie /api vers le backend (voir vite.config.ts) ;
// en production, Nginx fait la même chose. VITE_API_URL permet de pointer ailleurs.
export const API_URL = import.meta.env.VITE_API_URL ?? '/api';
