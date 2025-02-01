import "./Piano.css";

const notes = [
  { note: "C", type: "white", nname: "C" },
  { note: "Cs", type: "black", nname: "C#" },
  { note: "D", type: "white", nname: "D" },
  { note: "Ds", type: "black", nname: "D#" },
  { note: "E", type: "white", nname: "E" },
  { note: "F", type: "white", nname: "F" },
  { note: "Fs", type: "black", nname: "F#" },
  { note: "G", type: "white", nname: "G" },
  { note: "Gs", type: "black", nname: "G#" },
  { note: "A", type: "white", nname: "A" },
  { note: "As", type: "black", nname: "A#" },
  { note: "B", type: "white", nname: "B" },
];

export const Piano = () => {
  const playNote = (note) => {
    const audio = new Audio(`/sounds/${note}.wav`);
    audio.play().catch((error) => {
      console.error(`Audio file for ${note} not found`, error);
    });
  };

  return (
    <div className="piano">
      {notes.map(({ note, type, nname }) => (
        <div
          key={note}
          className={`key ${type}`}
          onClick={() => playNote(note)}
        >
          {nname}
        </div>
      ))}
    </div>
  );
};
