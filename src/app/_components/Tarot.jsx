import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "./Button";
import Image from "next/image";
import Message from "./Message";
import ReactCardFlip from "react-card-flip";
import { useUser } from "../context/UserContext";

export default function Tarot() {
  const { name } = useUser();
  const { cardId } = useParams();

  const [flipped, setFlipped] = useState(false);

  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [gifProps, setGifProps] = useState(null);

  function resizeImage(height, width) {
    if (width > 300) {
      const aspectRatio = height / width;
      width = 300;
      height = width * aspectRatio;
    }
    return { height, width };
  }

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
        const imgDimension = resizeImage(originalGif.height, originalGif.width);

        setGifProps({
          url: originalGif.url,
          height: imgDimension.height,
          width: imgDimension.width,
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    if (name && cardId) {
      fetchGifAndQuote();
    }
  }, [name, cardId]);

  useEffect(() => {
    if (gifProps) {
      const timer = setTimeout(() => {
        setFlipped(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [gifProps]);

  return (
    <>
      <Message />
      <ReactCardFlip isFlipped={flipped}>
        <div className="tarot back">
          <div className="tarot-inner-border"></div>
        </div>
        <div className="tarot front">
          {gifProps && (
            <Image
              src={gifProps.url}
              width={gifProps.width}
              height={gifProps.height}
              alt="random gif"
            />
          )}
          <p id="quote">
            {quote}
            <br />- {author}
          </p>
        </div>
      </ReactCardFlip>
    </>
  );
}
