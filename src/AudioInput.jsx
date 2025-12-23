import { useState } from "react";
import "./AudioInput.css";

export default function AudioInput() {
  const [transcription, setTranscription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8000/transcribe", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setTranscription(data.text);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(transcription);
  };

  return (
    <div className="audio-input-container">
      <label className="audio-input-label">Upload an audio file:</label>
      <input type="file" accept="audio/*" onChange={handleChange} />

      {loading && <p>Transcribing... Please wait.</p>}

      {transcription && (
        <div className="transcription-box">
          <h3>Transcription</h3>
          <textarea
            value={transcription}
            readOnly
            className="transcription-textarea"
          />
          <button onClick={handleCopy}>Copy Text</button>
        </div>
      )}
    </div>
  );
}
