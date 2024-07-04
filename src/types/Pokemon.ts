export type Pokemon = {
  id: number;
  name: string;
  // korean_name: string;
  height: number;
  weight: number;
  sprites: { front_default: string, back_default: string };
  types: { type: { name: string; korean_name: string } }[];
  abilities: { ability: { name: string; korean_name: string } }[];
  moves: { move: { name: string; korean_name: string, url: string } }[];
  location_area_encounters: string;
  korean_name?: string;
  cries: { latest: string };
  stats: { base_stat: number, effort: number, stat: { name: string, url: string } }[];
};

export type PokemonName = { id: number, koreanName: string };