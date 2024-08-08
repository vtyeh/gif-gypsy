"use client";
import { useUser } from "../../context/UserContext";
import Tarot from "../../_components/Tarot";
import Header from "../../_components/NavBar";
import Footer from "../../_components/Footer";
import RoundButton from "../../_components/RoundButton";

export default function Reading() {
  const { name } = useUser();

  return (
    <>
      <Header />
      <div id="reading-page" className="center-screen">
        {name ? (
          <Tarot />
        ) : (
          <p style={{ fontFamily: "Poppins" }}>Who are you?</p>
        )}
        <div className="buttons">
          {name && <RoundButton route="/intention" name="intention" />}
          <RoundButton route="/" name="home" />
          {name && <RoundButton route="/intention" name="save" />}
        </div>
      </div>
      <Footer />
    </>
  );
}
