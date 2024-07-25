"use client";

import { useRouter } from "next/navigation";
import IntentionForm from "../_components/IntentionForm";

export default function Intention() {
  const router = useRouter();

  return (
    <div>
      <h1>Take a moment to set your intention</h1>
      <ul>
        <li>What will make me smile more often?</li>
        <li>How can I bring more joy into my daily routine?</li>
        <li>
          What&apos;s my spirit animal for dealing with awkward situations?
        </li>
      </ul>
      <IntentionForm />
    </div>
  );
}
