import IntroMessageBox from "@/components/IntroMessage";
import Image from "next/image";
import professorOak from "../../public/pokemon/professorOak.webp";

export default function HomePage() {
  return (
    <main className="p-6">
      <span className="relative py-10 flex flex-col justify-center items-center">
        <Image
          src={professorOak}
          width={professorOak.width}
          height={professorOak.height}
          alt="professorOak : 오박사"
        />
      </span>
      <IntroMessageBox />
    </main>
  );
}
