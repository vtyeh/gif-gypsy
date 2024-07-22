"use client";

import { useRouter } from "next/navigation";
import Card from "../_components/Card.jsx";

export default function Cards() {
  const router = useRouter();

  return (
    <div>
      {
        <>
          <h1>Pick a card</h1>
          <Card id="1" />
          <Card id="2" />
          <Card id="3" />
        </>
      }
    </div>
  );
}
