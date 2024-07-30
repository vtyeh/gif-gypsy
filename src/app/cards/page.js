"use client";

import { useRouter } from "next/navigation";
import Card from "../_components/Card.jsx";

export default function Cards() {
  const router = useRouter();

  return (
    <div>
      {
        <div className="center-screen">
          <h1>Pick a card</h1>
          <div className="row">
            <Card id="1" />
            <Card id="2" />
            <Card id="3" />
          </div>
        </div>
      }
    </div>
  );
}
