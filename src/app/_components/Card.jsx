import { useRouter } from "next/navigation";

export default function Card({ id }) {
  const router = useRouter();
  return (
    <div className="card" onClick={() => router.push(`/reading/${id}`)}>
      <div className="inner-border"></div>
    </div>
  );
}
