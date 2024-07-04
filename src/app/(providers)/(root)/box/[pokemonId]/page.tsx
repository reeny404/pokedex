import { Pokemon } from "@/types/Pokemon";
import axios from "axios";
import MetaData from "../../_components/Metadata/Metadata";
import PokedexLeft from "../../_components/pokedex/PokedexLeft";
import PokedexRight from "../../_components/pokedex/PokedexRight";
import PokedexCenter from "../../_components/pokedex/PokedexCenter";

type Props = {
  params: { pokemonId: number };
  // searchParams: { [key: string]: string | undefined };
};

// interface PokemonBoxProps {
//   pokemon: Pokemon;
//   name: string | undefined;
// }

async function PokemonDetailPage({ params: { pokemonId } }: Props) {
  const { data: pokemon } = await axios.get<Pokemon>(
    `http://localhost:3000/api/pokemons/${pokemonId}`
  );

  const { id, korean_name: koreanName } = pokemon;

  return (
    <>
      <MetaData
        title={`No.${id} ${koreanName}`}
        desc={`${koreanName}상세 페이지`}
      />
      <main className="min-w-screen min-h-screen flex justify-center items-center">
        <PokedexLeft pokemon={pokemon}></PokedexLeft>
        <PokedexCenter />
        <PokedexRight pokemon={pokemon}></PokedexRight>
      </main>
    </>
  );
}

export default PokemonDetailPage;
