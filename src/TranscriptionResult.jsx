export default function TranscriptionResult({ text }) {
    if (!text) return null;

    return (
      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "12px",
          background: "#fafafa",
          maxWidth: "600px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ fontWeight: "600", marginBottom: "0.7rem" }}>
          Transcription Output
        </h3>
        <p style={{ lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{text}</p>
      </div>
    );
  }
