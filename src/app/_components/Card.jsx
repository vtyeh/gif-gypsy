import { useRouter } from "next/navigation";

export default function Card() {
  const router = useRouter();
  return (
    <div className="card" onClick={() => router.push("/reading")}>
      Card
    </div>
  );
}
