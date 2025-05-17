// import React from "react";
// import SketchPreview from "./SketchPreview";

// const Preview = ({ embedMode, code }) => {
//   return (
//     <div className="border p-4 mt-4">
//       <h2 className="text-lg font-semibold mb-2">Preview:</h2>
//       {embedMode === "iframe" ? (
//         <iframe
//           srcDoc={`
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
//     <script>${code}</script>
//   `}
//           width="800"
//           height="400"
//         />
//       ) : (
//         <SketchPreview code={code} />
//       )}
//     </div>
//   );
// };

// export default Preview;

"use client";
import React from "react";
import SketchPreview from "./SketchPreview";

const Preview = ({ embedMode, code }) => {
  console.log("Preview received:", { code, embedMode });
  return (
    <div className="border p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Preview:</h2>
      {embedMode === "iframe" ? (
        <iframe
          srcDoc={`
            <!DOCTYPE html>
            <html>
              <head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
              </head>
              <body>
                <script>${code}</script>
              </body>
            </html>
          `}
          width="800"
          height="400"
          style={{ border: "none" }}
        />
      ) : (
        <SketchPreview code={code} />
      )}
    </div>
  );
};

export default Preview;
