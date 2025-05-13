import React, { useRef, useEffect } from "react";

const SketchPreview = ({ code }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";

    const p5Script = document.createElement("script");
    p5Script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js";
    p5Script.async = true;

    p5Script.onload = () => {
      const sketchScript = document.createElement("script");
      sketchScript.type = "text/javascript";
      sketchScript.text = code;

      ref.current.appendChild(sketchScript);
    };

    ref.current.appendChild(p5Script);

    return () => {
      ref.current.innerHTML = "";
    };
  }, [code]);

  return <div ref={ref}></div>;
};

export default SketchPreview;
