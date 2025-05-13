// import Image from "next/image";
"use client";
import { useState, useEffect } from "react";
import Iframe from "./components/Iframe";
import ErrorBoundary from "./components/ErrorBoundary";
import Editor from "./components/Editor";
import Control from "./components/Controls";
import EmbedOptions from "./components/EmbedOptions";
import Preview from "./components/preview";
import SketchPreview from "./components/SketchPreview";

export default function Home() {
  const [code, setCode] = useState();
  const [playMode, setPlayMode] = useState("Stop");
  const [shouldPlay, setShouldPlay] = useState(false);
  const [embedMode, setEmbedMode] = useState("Iframe");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCode = localStorage.getItem("savedCode") || "";
      setCode(storedCode);
    }
  });

  const handlePlay = (mode) => {
    setPlayMode(mode);
    setShouldPlay(mode === "play" || mode === "Autoplay");
  };

  return (
    <>
      <div>
        <ErrorBoundary>
          <Iframe />
          <Editor code={code} setCode={setCode} />
          <Control setPlayMode={handlePlay} playMode={playMode} />
          <EmbedOptions embedMode={embedMode} setEmbedMode={setEmbedMode} />
          <SketchPreview code={code} />
          <Preview embedMode={embedMode} shouldPlay={shouldPlay ? code : " "} />
        </ErrorBoundary>
      </div>
      ;
    </>
  );
}
