"use client";

import { Pokemon } from "@/types/Pokemon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import loadingGif from "../../../assets/loading.gif";
import PokemonItem from "./PokemonItem";

function PokemonList() {
  const [pageNo, setPageNo] = useState<number>(0);
  const [names, setNames] = useState([]);

  const { data: response, isSuccess } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () =>
      axios.get(`http://localhost:3000/api/pokemons?pageNo=${pageNo}`),
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "http://localhost:3000/api/pokemons/name"
      );
      setNames(data);
    })();
  }, [isSuccess]);

  if (!isSuccess) {
    return (
      <Image
        src={loadingGif}
        width={50}
        height={50}
        alt="로딩 중..."
        className="absolute top-[calc(50%-25px)] left-[calc(50%-25px)]"
      />
    );
  }

  const pokemons: Pokemon[] = response.data;
  const handleNextIndex = (n: number) => {
    setPageNo((i) => {
      const nextPageNo: number = i + n;
      return nextPageNo > 0 ? nextPageNo : i;
    });
  };

  return (
    <>
      <div className="py-2 flex flex-row justify-center items-center text-lg">
        <span
          className="px-2 py-1 rounded-full cursor-pointer hover:bg-yellow-500 hover:text-white"
          onClick={() => handleNextIndex(-1)}
        >
          ◁
        </span>
        <span>박스{pageNo + 1}</span>
        <span
          className="px-2 py-1 rounded-full cursor-pointer hover:bg-yellow-500 hover:text-white"
          onClick={() => handleNextIndex(+1)}
        >
          ▷
        </span>
      </div>
      <ol className="grid lg:grid-cols-5 grid-cols-4 sm:grid-cols-3 xs:grid-col-2 gap-5">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link href={`/box/${pokemon.id}`}>
              <PokemonItem
                pokemon={pokemon}
                name={names[pokemon.id - 1]}
                rotatable
              />
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default PokemonList;
