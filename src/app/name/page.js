"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NameForm() {
  const router = useRouter();
  let [name, setName] = useState();

  const handleClick = (event) => {
    event.preventDefault();
    const [input] = event.target;
    setName(input.value);
    router.push("/intention");
  };

  return (
    <div>
      <h1>Enter your name: {name}</h1>
      <form onSubmit={handleClick}>
        <input type="text" placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
