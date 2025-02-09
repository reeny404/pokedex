"use client";

import { Pokemon } from "@/types/Pokemon";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import loadingGif from "../../../assets/loading.gif";
import PokemonItem from "./PokemonItem";

function PokemonList() {
  const [pageNo, setPageNo] = useState<number>(0);
  const [names, setNames] = useState([]);

  const {
    data: response,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["pokemons", pageNo],
    queryFn: () =>
      axios.get(
        `${process.env.NEXT_PUBLIC_HOST}/api/pokemons?pageNo=${pageNo}`
      ),
    placeholderData: keepPreviousData,
    retry: 3,
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_HOST}/api/pokemons/name`
      );
      setNames(data);
    })();
  }, [isSuccess]);

  if (isLoading) {
    return (
      <Image
        src={loadingGif}
        width={50}
        height={50}
        alt="로딩 중..."
        className="absolute top-[calc(50%-25px)] left-[calc(50%-25px)]"
      />
    );
  } else if (!isSuccess) {
    return (
      <div>일시적인 오류로 데이터를 불러오지 못했습니다. 재시도해주세요</div>
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
