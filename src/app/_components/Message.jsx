"use client";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export default function Message() {
  let { name, setName } = useUser();
  const router = useRouter();

  return (
    <>
      <h1>{name}, get ready to boogie with your newfound wisdom!</h1>
    </>
  );
}
