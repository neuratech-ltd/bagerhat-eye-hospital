// app/page.tsx (or a client wrapper)
"use client";
import { useEffect } from "react";

export default function HomeScrollHandler() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      // slight delay lets layout settle before scrolling
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, []);

  return null;
}
