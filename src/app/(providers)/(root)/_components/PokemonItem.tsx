import { Pokemon } from "@/types/Pokemon";
import Image from "next/image";

interface PokemonBoxProps {
  pokemon: Pokemon;
}

function PokemonItem({ pokemon }: PokemonBoxProps) {
  return (
    <div className="flex flex-col justify-center items-center border box-border cursor-pointer">
      <span className="w-full text-left box-border">
        <span className="px-2 py-1 bg-green-200 rounded">No.{pokemon.id}</span>
      </span>
      <span className="w-full min-h-28 p-5 relative group aspect-auto">
        <span className="invisible group-hover:visible relative left-6 bottom-6 -rotate-45 text-red-700">
          let{"'"}s go!
        </span>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          fill
          priority={true}
          sizes="(min-width: 50px), (min-height-50px)"
          className="absolute object-fit group-hover:[transform:rotateY(180deg)] transition-all"
          style={{ backfaceVisibility: "hidden" }}
        />
        <Image
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
          fill
          sizes="(min-width: 50px), (min-height-50px)"
          className="absolute object-fit group-hover:[transform:rotateY(0)] transition-all [transform:rotateY(180deg)] "
          style={{ backfaceVisibility: "hidden" }}
        />
      </span>
    </div>
  );
}

export default PokemonItem;
