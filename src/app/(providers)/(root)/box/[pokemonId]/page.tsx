import { Pokemon } from "@/types/Pokemon";
import axios from "axios";
import BackButton from "../../_components/BackButton";
import MetaData from "../../_components/Metadata/Metadata";
import PokedexCenter from "../../_components/pokedex/PokedexCenter";
import PokedexLeft from "../../_components/pokedex/PokedexLeft";
import PokedexRight from "../../_components/pokedex/PokedexRight";

type Props = {
  params: { pokemonId: number };
};

async function PokemonDetailPage({ params: { pokemonId } }: Props) {
  const { data: pokemon } = await axios.get<Pokemon>(
    `${process.env.NEXT_PUBLIC_HOST}/api/pokemons/${pokemonId}`
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
      <div className="min-w-10 h-5 fixed top-1/2 left-2">
        <BackButton />
      </div>
    </>
  );
}

export default PokemonDetailPage;
