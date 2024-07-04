"use client";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-12 h-12 rounded-full bg-gray-400 text-white hover:brightness-125"
    >
      ←
    </button>
  );
}

export default BackButton;
