import React from "react";

const Control = ({ playMode, setPlayMode }) => {
  return (
    <>
      <label className="block mb-2 font-semibold">Play Mode:</label>
      <select
        className="p-2 border"
        value={playMode}
        onChange={(e) => setPlayMode(e.target.value)}
      >
        <option value="Stop">Stop</option>
        <option value="Play">Play</option>
        <option value="Autoplay">Autoplay</option>
        <option value="Pause">Pause</option>
      </select>
    </>
  );
};

export default Control;
