import React from "react";
import SketchPreview from "./SketchPreview";

const Preview = ({ embedMode }) => {
  return (
    <>
      {embedMode === "iframe" ? (
        <iframe
          srcDoc={`<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script><script>${code}</script>`}
        />
      ) : (
        <SketchPreview />
      )}
    </>
  );
};

export default Preview;
