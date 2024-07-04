import axios from "axios";
import { NextResponse } from "next/server";

const TOTAL_POKEMON = 151;

export const GET = async () => {
  try {
    const allPokemonPromises = Array.from({ length: TOTAL_POKEMON }, (_, index) => {
      const id: number = index + 1;
      return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    });

    const responses = await Promise.all(allPokemonPromises);
    const names = responses.map(response => {
      const { id, names } = response.data;
      const { name: koreanName } = names.find(
        (name: any) => name.language.name === "ko"
      );
      return { id, koreanName };
    })

    return NextResponse.json(names);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};