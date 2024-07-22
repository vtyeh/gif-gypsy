"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div>
        <h1>Welcome to the Gif Gypsy</h1>
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
