import { useRouter } from "next/navigation";

export default function Button({ routeName, label }) {
  const router = useRouter();
  return <button onClick={() => router.push(routeName)}>{label}</button>;
}
