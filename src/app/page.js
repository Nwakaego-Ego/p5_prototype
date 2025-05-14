// import Image from "next/image";
"use client";
import { useState, useEffect } from "react";
// import Iframe from "./components/Iframe";
import ErrorBoundary from "./components/ErrorBoundary";
import Editor from "./components/Editor";
import Control from "./components/Controls";
import EmbedOptions from "./components/EmbedOptions";
import Preview from "./components/preview";

export default function Home() {
  const [code, setCode] = useState(`function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
}`);

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
    setShouldPlay(mode === "Play" || mode === "Autoplay");
  };

  return (
    <>
      <div>
        <ErrorBoundary>
          <Editor code={code} setCode={setCode} />
          <Control setPlayMode={handlePlay} playMode={playMode} />
          <EmbedOptions embedMode={embedMode} setEmbedMode={setEmbedMode} />
          {shouldPlay && <Preview embedMode={embedMode} code={code} />}
        </ErrorBoundary>
      </div>
    </>
  );
}
