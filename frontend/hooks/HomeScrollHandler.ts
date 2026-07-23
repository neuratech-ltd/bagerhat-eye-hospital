"use client";
import { useEffect } from "react";

export default function HomeScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");

    // wait for images/layout instead of a fixed guess
    const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    if (document.readyState === "complete") {
      setTimeout(scroll, 150);
    } else {
      window.addEventListener("load", () => setTimeout(scroll, 150));
    }
  }, []);

  return null;
}
