"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "./_components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="center-screen">
        <div id="welcome">
          <div id="left-sparkle">
            <Image
              src="/images/sparkles_1.svg"
              width={30}
              height={30}
              alt="check"
            />
          </div>
          <h1 className="title">
            Welcome to
            <br />
            the <span style={{ color: "white" }}>Gif Gypsy</span>
          </h1>
          <div id="right-sparkle">
            <Image
              src="/images/sparkles_2.svg"
              width={30}
              height={30}
              alt="check"
            />
          </div>
        </div>

        <button
          onClick={() => {
            router.push("/name");
          }}
        >
          ENTER
        </button>
      </div>
      <Footer />
    </main>
  );
}
