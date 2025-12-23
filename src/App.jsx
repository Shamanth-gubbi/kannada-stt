import { useState } from "react";
import AudioInput from "./AudioInput";
// import TranscriptionResult from "./TranscriptionResult";
export default function App() {
  const [audioFile, setAudioFile] = useState(null);

  return (
    <div style={{ padding: "1.5rem" }}>
      <AudioInput onFileSelect={setAudioFile} />

      {audioFile && (
        <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "12px" }}>
          <p style={{ fontWeight: "600" }}>Selected File:</p>
          <p>{audioFile.name}</p>
          <audio controls src={URL.createObjectURL(audioFile)} style={{ marginTop: "0.5rem", width: "100%" }} />
        </div>
      )}
      {/* <TranscriptionResult/> */}
    </div>
  );
}