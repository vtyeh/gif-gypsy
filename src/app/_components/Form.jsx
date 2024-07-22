"use client";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export default function Form() {
  const { setName } = useUser();
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();

    const [input] = event.target;
    setName(input.value);

    router.push("/intention");
  };

  return (
    <form onSubmit={handleClick}>
      <input type="text" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
}
