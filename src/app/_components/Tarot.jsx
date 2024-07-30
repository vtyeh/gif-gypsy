import Button from "./Button";
import Image from "next/image";
import Message from "./Message";

export default function Tarot({ gifProps, quote, author }) {
  return (
    <>
      <Message />
      <div id="tarot">
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
      <Button label="Reshuffle" routeName="/intention" />
    </>
  );
}
