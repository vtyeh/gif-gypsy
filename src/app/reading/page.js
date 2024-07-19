"use client";

import { useRouter } from "next/navigation";
import Card from "../_components/Card.jsx";

export default function NameForm() {
  const router = useRouter();

  return (
    <div>
      <h1>Here is your reading</h1>
      <Card />
    </div>
  );
}
