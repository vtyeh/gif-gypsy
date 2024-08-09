import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import html2canvas from "html2canvas";

import { useUser } from "../context/UserContext";
import RoundButton from "./RoundButton";
import Message from "./Message";

export default function Tarot() {
  const { name } = useUser();
  const { cardId } = useParams();

  const [flipped, setFlipped] = useState(false);

  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [gifProps, setGifProps] = useState(null);

  const tarotRef = useRef(null);

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

  function download() {
    console.log("download tarot");
    // TODO: fix the gif size. it's too large
    if (tarotRef.current) {
      html2canvas(tarotRef.current).then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "your-tarot.png";
        link.click();
      });
    }
  }

  return (
    <>
      <Message />
      <ReactCardFlip isFlipped={flipped}>
        <div className="tarot back">
          <div className="tarot-inner-border"></div>
        </div>
        <div ref={tarotRef} className="tarot front">
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
          <p id="logo">The Gif Gypsy</p>
        </div>
      </ReactCardFlip>
      <div className="buttons">
        <RoundButton route="/intention" name="intention" />
        <RoundButton route="/" name="home" />
        <div className="round-button" onClick={download}>
          <Image
            src="/images/save.svg"
            width={25}
            height={25}
            alt={"download button"}
          />
        </div>
      </div>
    </>
  );
}
