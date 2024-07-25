import Button from "./Button";
import Image from "next/image";
import Message from "./Message";

export default function Tarot({ gifProps, quote, author }) {
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
    </>
  );
}
