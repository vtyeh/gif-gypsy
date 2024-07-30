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
      <input
        className="input-box"
        type="text"
        placeholder="Ex: How can I take life less seriously?"
        style={{ fontSize: "1em" }}
      />
      <button type="submit">I&apos;M READY!</button>
      <p>{error}</p>
    </form>
  );
}
