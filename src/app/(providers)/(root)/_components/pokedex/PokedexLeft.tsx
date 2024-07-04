import { Pokemon } from "@/types/Pokemon";
import PokemonItem from "../PokemonItem";

type Props = {
  pokemon: Pokemon;
};

function PokedexLeft({ pokemon }: Props) {
  const { id, korean_name: name, types } = pokemon;

  return (
    <section className="w-1/2 py-4 border border-black bg-red-600 rounded-lg flex flex-col justify-center items-center">
      <div className="w-full h-12 px-5 flex gap-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <div className="w-8 h-8 border border-black rounded-full bg-blue-400"></div>
        </div>
        <div className="w-2 h-2 border border-black rounded-full bg-red-500"></div>
        <div className="w-2 h-2 border border-black rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 border border-black rounded-full bg-green-600"></div>
        <div className="w-4 h-4 rounded-full bg-white relative -left-24 top-2 blur-sm"></div>
      </div>
      <div className="w-full h-4 mb-4 flex flex-row">
        <div className="w-1/4 border-b-4 border-double border-black"></div>
        <div className="w-1/6 border-b-4 border-double border-black -rotate-45 relative -left-3 bottom-3.5"></div>
        <div className="w-full h-full border-t-4 border-double border-black relative -left-4 bottom-5"></div>
      </div>
      <div className="w-4/5 px-6 aspect-video rounded bg-gray-50">
        <div className="h-6"></div>
        <div className="w-full bg-gray-900 rounded">
          <PokemonItem pokemon={pokemon} name={name} />
        </div>
        <div className="h-6">
          <div className="w-3 h-3 m-2 border border-black rounded-full bg-red-600"></div>
        </div>
      </div>
      <div className="w-4/5 py-4">
        <div className="px-4 py-2 rounded bg-gray-900 text-white">
          <span className="flex gap-2 items-center">
            <span>
              No.{id} {name}
            </span>
            {types.map((item, i) => (
              <span key={i} className="text-sm">
                [ {item.type.korean_name} ]
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}

export default PokedexLeft;
