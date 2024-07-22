"use client";
import { useRouter, useParams } from "next/navigation";
import Button from "../../_components/Button";
import Card from "../../_components/Card";
import Message from "../../_components/Message";
import { useEffect, useState } from "react";

export default function Reading() {
  let [quote, setQuote] = useState(null);
  const { cardId } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (cardId) {
      fetch("https://zenquotes.io/api/random")
        .then((res) => res.json())
        .then((data) => setQuote(data.q));
    }
  }, [cardId]);

  console.log(quote);

  return (
    <>
      <Message />
      <Card />
      <Button label="Reshuffle" routeName="/intention" />
    </>
  );
}
