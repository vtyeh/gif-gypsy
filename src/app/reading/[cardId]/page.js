"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useUser } from "../../context/UserContext";
import Tarot from "../../_components/Tarot";
import Header from "../../_components/NavBar";
import Footer from "../../_components/Footer";

export default function Reading() {
  const router = useRouter();

  const { name } = useUser();

  return (
    <>
      <Header />
      <div id="reading-page" className="center-screen">
        {name ? <Tarot /> : <p>Who are you?</p>}
        <div
          className="home-button"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src="/images/home.svg" width={25} height={25} alt="check" />
        </div>
      </div>
      <Footer />
    </>
  );
}
