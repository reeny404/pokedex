import ProfessorOak from "@/components/ProfessorOak";
import { introMessage } from "@/types/IntroMessage";
import Image from "next/image";
import Link from "next/link";
import lottieConfetti from "../../public/LottieConfetti.json";
import professorOak from "../../public/pokemon/professorOak.webp";
import Header from "./(providers)/(root)/_components/Header/Header";

const intro: introMessage[] = [
  { type: "text", text: "이야- 오래 기다리게 했다!" },
  { type: "text", text: "포켓몬스터의 세계에 잘 왔단다!" },
  { type: "confirm", text: "준비는 되었는가?" },
  {
    type: "text",
    text: "당신은 오박사로부터 포켓몬 도감을 얻었다.",
    lottieJson: lottieConfetti,
  },
  { type: "text", text: "그럼 잘 부탁한다!" },
];

export default function HomePage() {
  return (
    <>
      <Header title="오박사의 인사">
        <Link href="/box">건너뛰기</Link>
      </Header>
      <main className="px-6 pb-4 flex flex-col justify-center items-center">
        <ProfessorOak messages={intro}>
          <span className="pt-20 pb-10 flex flex-col justify-center items-center">
            <Image
              src={professorOak}
              width={professorOak.width}
              height={professorOak.height}
              alt="professorOak : 오박사"
            />
          </span>
        </ProfessorOak>
      </main>
    </>
  );
}
