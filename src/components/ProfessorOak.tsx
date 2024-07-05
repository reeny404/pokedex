"use client";

import { introMessage as IntroMessageType } from "@/types/IntroMessage";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import Lottie from "react-lottie-player";
import ConfirmMessage from "./ConfirmMessage";
import MessageBox from "./MessageBox";

type Props = {
  messages: IntroMessageType[];
} & PropsWithChildren;

function ProfessorOak({ messages, children }: Props) {
  const [index, setIndex] = useState<number>(0);

  const hasNext: boolean = index < messages.length - 1;
  const handleClick = () => {
    if (hasNext) setIndex((i) => i + 1);
  };

  const msg: IntroMessageType = messages[index];
  const isConfirm: boolean = msg.type === "confirm";

  return (
    <>
      <>
        {children}
        {msg.lottieJson && (
          <Lottie
            animationData={msg.lottieJson}
            play
            loop={false}
            className="w-1/4 m-auto fixed top-52 opacity-50 z-50"
          />
        )}
      </>
      <MessageBox onClick={isConfirm ? undefined : handleClick}>
        {msg.text}

        {!hasNext && (
          <Link href="/box">
            <br />
            『도감 열기 ← click』{" "}
          </Link>
        )}
      </MessageBox>
      {isConfirm && <ConfirmMessage onClick={handleClick} />}
    </>
  );
}

export default ProfessorOak;
