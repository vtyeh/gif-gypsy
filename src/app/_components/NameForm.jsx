"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function NameForm() {
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
      <input className="input-box" type="text" style={{ fontSize: "1.5em" }} />
      <br />
      <button type="submit">SUBMIT</button>
      <p>{error}</p>
    </form>
  );
}
