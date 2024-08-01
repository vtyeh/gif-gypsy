"use client";

import { useRouter } from "next/navigation";
import Card from "../_components/Card.jsx";
import Header from "../_components/NavBar";
import Footer from "../_components/Footer";

export default function Cards() {
  const router = useRouter();

  return (
    <>
      <Header />
      <div id="cards-page" className="center-screen">
        <h1>Pick a card</h1>
        <div className="row">
          <Card id="1" />
          <Card id="2" />
          <Card id="3" />
        </div>
      </div>
      <Footer />
    </>
  );
}
