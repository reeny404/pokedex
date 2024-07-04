"use client";

import { introMessage as introMessageType } from "@/types/IntroMessage";
import Link from "next/link";
import { useState } from "react";
import MessageBox from "./MessageBox";

const intro: introMessageType[] = [
  { type: "text", text: "이야- 오래 기다리게 했다!" },
  { type: "text", text: "포켓몬스터의 세계에 잘 왔단다!" },
  { type: "confirm", text: "준비는 되었는가?" },
  { type: "text", text: "당신은 오박사로부터 포켓몬 도감을 얻었다." },
  { type: "text", text: "그럼 잘 부탁한다!" },
];

function IntroMessageBox() {
  const [index, setIndex] = useState<number>(0);

  const hasNext: boolean = index < intro.length - 1;
  const handleClick = () => {
    if (hasNext) setIndex((i) => i + 1);
  };

  const currentMessage: introMessageType = intro[index];
  const isConfirm: boolean = currentMessage.type === "confirm";

  return (
    <>
      <MessageBox onClick={isConfirm ? undefined : handleClick}>
        {currentMessage.text}

        {!hasNext && (
          <Link href="/box">
            <br />
            『도감 열기 ← click』{" "}
          </Link>
        )}
      </MessageBox>
      {isConfirm && <ConfirmBox onClick={handleClick} />}
    </>
  );
}

function ConfirmBox({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex justify-end text-3xl ml- relative bottom-52 ">
      <div
        onClick={onClick}
        className="px-6 py-4 mr-8 bg-white border-double border-4 border-gray-950 rounded-lg"
      >
        <div className="hover:underline cursor-pointer mb-2 ">네</div>
        <div className="hover:underline cursor-pointer">완료-☆</div>
      </div>
    </div>
  );
}

export default IntroMessageBox;
