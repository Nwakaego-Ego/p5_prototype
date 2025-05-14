import React from "react";
import SketchPreview from "./SketchPreview";

const Preview = ({ embedMode, code }) => {
  return (
    <div className="border p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Preview:</h2>
      {embedMode === "iframe" ? (
        <iframe
          title="p5-preview"
          width="800"
          height="400"
          style={{ border: "1px solid #ccc" }}
          srcDoc={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
</head>
<body>
  <script>
    ${code}
  </script>
</body>
</html>`}
        />
      ) : (
        <SketchPreview code={code} />
      )}
    </div>
  );
};

export default Preview;
