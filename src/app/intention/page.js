"use client";

import { useRouter } from "next/navigation";

export default function Intention() {
  const router = useRouter();

  return (
    <div>
      <h1>Take a moment to set your intentions</h1>
      <button
        onClick={() => {
          router.push("/cards");
        }}
      >
        I&apos;M READY
      </button>
    </div>
  );
}
