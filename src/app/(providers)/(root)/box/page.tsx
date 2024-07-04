import PokemonList from "@/app/(providers)/(root)/_components/PokemonList";
import Header from "../_components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PokeBox : 포켓몬 박스",
  description: "그동안 모은 포켓박스란다!",
};

function PokemonBoxPage() {
  return (
    <>
      <Header title="포켓몬 박스">
        <button>login</button>
      </Header>
      <section className="text-center">
        <PokemonList />
      </section>
    </>
  );
}

export default PokemonBoxPage;
