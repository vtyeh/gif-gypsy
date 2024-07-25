"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function Form() {
  const { setName } = useUser();
  const [error, setError] = useState();
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();

    const [input] = event.target;
    if (input.value) {
      setName(input.value);
      router.push("/intention");
    } else {
      setError("Please enter in your name :)");
    }
  };

  return (
    <form onSubmit={handleClick}>
      <input type="text" placeholder="Name" />
      <button type="submit">Submit</button>
      <p>{error}</p>
    </form>
  );
}
