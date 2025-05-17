// import Image from "next/image";
"use client";
import { useState, useEffect } from "react";
// import Iframe from "./components/Iframe";
import ErrorBoundary from "./components/ErrorBoundary";
import Editor from "./components/Editor";
import Control from "./components/Controls";
import EmbedOptions from "./components/EmbedOptions";
import Preview from "./components/Preview";

export default function Home() {
  const [code, setCode] = useState("");
  const [playMode, setPlayMode] = useState("Stop");
  // const [shouldPlay, setShouldPlay] = useState(false);
  const [embedMode, setEmbedMode] = useState("iframe");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCode = localStorage.getItem("savedCode") || "";
      setCode(storedCode);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("savedCode", code);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [code]);

  const handlePlay = (mode) => {
    setPlayMode(mode);
  };

  const shouldPlay = playMode === "Play" || playMode === "Autoplay";

  console.log("Debug:", { playMode, shouldPlay, code });

  return (
    <>
      <div>
        <ErrorBoundary>
          <Editor code={code} setCode={setCode} />
          <Control setPlayMode={handlePlay} playMode={playMode} />
          <EmbedOptions embedMode={embedMode} setEmbedMode={setEmbedMode} />
          <Preview code={shouldPlay ? code : ""} embedMode={embedMode} />
        </ErrorBoundary>
      </div>
    </>
  );
}
