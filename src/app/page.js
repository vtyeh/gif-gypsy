"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="center-screen">
        <h1 className="title">
          Welcome to
          <br />
          the <span style={{ color: "white" }}>Gif Gypsy</span>
        </h1>
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
