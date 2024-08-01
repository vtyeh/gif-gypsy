"use client";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export default function Message() {
  const { name, intention } = useUser();
  const router = useRouter();

  const clean_intention = intention[0].toUpperCase() + intention.slice(1);

  return (
    <>
      <h1 style={{ margin: "1em" }}>
        {name}, you asked the energy of the wise Gifs:
      </h1>
      <h2>{clean_intention}</h2>
    </>
  );
}
