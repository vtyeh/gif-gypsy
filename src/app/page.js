"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div>
        Welcome to the Gif Gypsy
        <button
          onClick={() => {
            router.push("/name");
          }}
        >
          ENTER
        </button>
      </div>
    </main>
  );
}
