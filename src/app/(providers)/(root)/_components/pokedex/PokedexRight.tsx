import { Pokemon } from "@/types/Pokemon";
import { translateStatKey } from "@/types/StatKey";
import { PokemonCryAudio } from "../PokemonCryAudio";

type Props = {
  pokemon: Pokemon;
};

function PokedexRight({ pokemon }: Props) {
  const {
    height,
    weight,
    cries: { latest: cryAudioURL },
  } = pokemon;

  return (
    <section className="w-1/2 py-6 border border-black bg-red-600 text-white rounded-lg relative -left-1">
      <div className="w-4/5 py-4 m-auto flex flex-col justify-center items-center gap-y-4">
        <article className="w-full px-4 py-2 bg-gray-900 rounded">
          <div>키 : {height} m</div>
          <div>몸무게 : {weight} kg</div>
        </article>
        <div className="w-full grid grid-cols-5 shadow-2xl">
          {pokemon.moves.slice(0, 10).map((item, i) => (
            <div
              key={i}
              className="min-h-6 text-sm text-ellipsis text-center bg-blue-500 border border-black hover:brightness-75"
            >
              {item.move.korean_name}
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row justify-end items-start gap-x-0.5">
          <div className="w-8 h-1 rounded-lg bg-slate-800 shadow-sm shadow-black hover:brightness-150"></div>
          <div className="w-8 h-1 rounded-lg bg-slate-800 shadow-sm shadow-black hover:brightness-150"></div>
        </div>
        <div className="w-full flex flex-row justify-between items-start gap-x-0.5">
          <div className="w-1/2 grid grid-cols-2">
            <div className="min-h-6 text-center text-black bg-gray-50 border border-black hover:brightness-75">
              <PokemonCryAudio URL={cryAudioURL} />
            </div>
            <div className="min-h-6 text-center bg-gray-50 border border-black hover:brightness-75"></div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-8 h-8 border border-black rounded-full bg-yellow-600"></div>
            <div className="w-4 h-4 rounded-full bg-white relative -left-5 top-0.5 blur-sm"></div>
          </div>
        </div>
        <article className="w-full px-4 py-2 bg-gray-900 rounded">
          {pokemon.stats.slice(0, 10).map((item, i) => (
            <div key={i}>
              {translateStatKey(item.stat.name)}: {item.base_stat}
              {item.effort && ` (노력치: ${item.effort})`}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default PokedexRight;
