"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useUser } from "../../context/UserContext";
import Tarot from "../../_components/Tarot";

export default function Reading() {
  const router = useRouter();

  const { name } = useUser();

  return (
    <div className="center-screen">
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
  );
}
