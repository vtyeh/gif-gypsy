import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RoundButton({ route, name }) {
  const router = useRouter();
  return (
    <div
      className="round-button"
      onClick={() => {
        router.push(route);
      }}
    >
      <Image
        src={`/images/${name}.svg`}
        width={25}
        height={25}
        alt={`${name} button`}
      />
    </div>
  );
}
