"use client";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="logo" onClick={() => router.push("/")}>
      The Gif Gypsy
    </div>
  );
}
