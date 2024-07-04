"use client";

import { useRef } from "react";

type Props = {
  URL: string;
};

export function PokemonCryAudio({ URL: cryAudioURL }: Props) {
  const ref = useRef<HTMLAudioElement>(null);

  const handleOnClick = () => ref?.current?.play();

  return (
    <div>
      <button onClick={handleOnClick} className="hover">cry ▶</button>
      <audio src={cryAudioURL} controls ref={ref} className="hidden" />
    </div>
  );
}
