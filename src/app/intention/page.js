"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import IntentionForm from "../_components/IntentionForm";
import Header from "../_components/NavBar";
import Footer from "../_components/Footer";

export default function Intention() {
  const router = useRouter();

  return (
    <>
      <Header />
      <div id="intention-page" className="center-screen">
        <Image src="/images/sun.svg" width={35} height={35} alt="check" />
        <h1>
          Take a moment to set your{" "}
          <span style={{ color: "white" }}>intention</span>
        </h1>
        <IntentionForm />
      </div>
      <Footer />
    </>
  );
}
