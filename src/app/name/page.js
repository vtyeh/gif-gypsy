"use client";
import Image from "next/image";
import NameForm from "../_components/NameForm";
import Header from "../_components/NavBar";
import Footer from "../_components/Footer";

export default function Name() {
  return (
    <>
      <Header />
      <div className="center-screen">
        <Image src="/images/moon.svg" width={35} height={35} alt="check" />
        <h1>Enter your name:</h1>
        <NameForm />
      </div>
      <Footer />
    </>
  );
}
