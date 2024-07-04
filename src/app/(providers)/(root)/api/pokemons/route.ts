import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const PAGE_PER_COUNT = 60;

export const GET = async (request: NextRequest) => {
  const parameters: URLSearchParams = request.nextUrl.searchParams;
  try {
    const pageNo = parameters.get("pageNo") ?? 0;
    const allPokemonPromises = Array.from({ length: PAGE_PER_COUNT }, (_, index) => {
      const id: number = Number(pageNo) * PAGE_PER_COUNT + index + 1;
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    });

    const responses = (await Promise.all(allPokemonPromises)).map(response => response.data);

    return NextResponse.json(responses);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};


// export const GET = async (request: Request) => {
//   try {
//     const allPokemonPromises = Array.from({ length: TOTAL_POKEMON }, (_, index) => {
//       const id = index + 1;
//       return Promise.all([
//         axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
//         axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
//       ]);
//     });

//     const allPokemonResponses = await Promise.all(allPokemonPromises);

//     const allPokemonData = allPokemonResponses.map(([response, speciesResponse], index) => {
//       const koreanName = speciesResponse.data.names.find(
//         (name: any) => name.language.name === "ko"
//       );
//       return { ...response.data, korean_name: koreanName?.name || null };
//     });

//     return NextResponse.json(allPokemonData);
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch data" });
//   }
// };

