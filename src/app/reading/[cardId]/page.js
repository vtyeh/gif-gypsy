"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../_components/Button";
import Message from "../../_components/Message";

export default function Reading() {
  let [quote, setQuote] = useState(null);
  let [author, setAuthor] = useState(null);
  let [gifProps, setGifProps] = useState(null);
  let { cardId } = useParams();
  const router = useRouter();

  useEffect(() => {
    async function fetchGifAndQuote() {
      try {
        const quoteResponse = await fetch(`/api/quote`);
        const quoteData = await quoteResponse.json();
        setQuote(quoteData.data[0].q);
        setAuthor(quoteData.data[0].a);

        const gifResponse = await fetch(`/api/gif`);
        const gifData = await gifResponse.json();
        const randomIndex = Math.floor(Math.random() * 10); // multiplier should equal whatever the limit is in api/gif query
        const originalGif = gifData.data.data[randomIndex].images.original;

        setGifProps({
          url: originalGif.url,
          height: originalGif.height,
          width: originalGif.width,
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    if (cardId) {
      fetchGifAndQuote();
    }
  }, [cardId]);

  return (
    <>
      <Message />
      {gifProps && (
        <Image
          src={gifProps.url}
          width={gifProps.width}
          height={gifProps.height}
          alt="random gif"
        />
      )}
      <p>
        {quote} -- {author}
      </p>
      <Button label="Reshuffle" routeName="/intention" />
      <div
        onClick={() => {
          router.push("/");
        }}
      >
        home
      </div>
    </>
  );
}
