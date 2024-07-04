"use client";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:brightness-115"
    >
      뒤로가기
    </button>
  );
}

export default BackButton;
