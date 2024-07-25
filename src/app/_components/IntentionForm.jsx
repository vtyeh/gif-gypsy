"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function IntentionForm() {
  const { setIntention } = useUser();
  const [error, setError] = useState();
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();

    const [input] = event.target;
    if (input.value) {
      setIntention(input.value);
      router.push("/cards");
    } else {
      setError("Please enter in your intention :)");
    }
  };

  return (
    <form onSubmit={handleClick}>
      <input type="text" placeholder="Intention" />
      <button type="submit">I&apos;m ready!</button>
      <p>{error}</p>
    </form>
  );
}
