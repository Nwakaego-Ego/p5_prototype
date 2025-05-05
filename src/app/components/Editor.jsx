"use client";
import React from "react";

const Editor = ({ code, setCode }) => {
  return (
    <>
      <textarea
        className="w-full h-60 p-2 border"
        value={code}
        onChange={
          (setCode = (e) => {
            e.target.value;
          })
        }
        placeholder={`function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}`}
      />
    </>
  );
};

export default Editor;
