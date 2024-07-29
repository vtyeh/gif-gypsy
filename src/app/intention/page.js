"use client";

import { useRouter } from "next/navigation";
import IntentionForm from "../_components/IntentionForm";

export default function Intention() {
  const router = useRouter();

  return (
    <div className="center-screen">
      <h1>Take a moment to set your intention</h1>
      <IntentionForm />
    </div>
  );
}
