import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const pokemonId = searchParams.get('id');

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
    const { names } = response.data;
    const { name: koreanName } = names.find(
      (name: any) => name.language.name === "ko"
    );

    return NextResponse.json({ pokemonId, koreanName, names });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};