import IntroMessageBox from "@/components/IntroMessage";
import Image from "next/image";
import Link from "next/link";
import professorOak from "../../public/pokemon/professorOak.webp";
import Header from "./(providers)/(root)/_components/Header/Header";

export default function HomePage() {
  return (
    <>
      <Header title="오박사의 인사">
        <Link href="/box">건너뛰기</Link>
      </Header>
      <main className="px-6 pb-4 flex flex-col justify-center items-center">
        <span className="pt-20 pb-10 flex flex-col justify-center items-center">
          <Image
            src={professorOak}
            width={professorOak.width}
            height={professorOak.height}
            alt="professorOak : 오박사"
          />
        </span>
        <IntroMessageBox />
      </main>
    </>
  );
}
