import React, { useState, useEffect, useRef, createRef } from "react";
import Draggable from "react-draggable";
import "./StickyBoard.css";

interface Note {
    id: number;
    text: string;
    x: number;
    y: number;
}

const StickyBoard: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Load notes
    useEffect(() => {
        const saved = localStorage.getItem("notes");
        if (saved) setNotes(JSON.parse(saved));
    }, []);

    // Save notes
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = () => {
        const newNote: Note = {
            id: Date.now(),
            text: "",
            x: Math.random() * 400,
            y: Math.random() * 200,
        };
        setNotes((prev) => [...prev, newNote]);
    };

    const handleStop = (id: number, data: any) => {
        setNotes((prev) =>
            prev.map((n) =>
                n.id === id ? { ...n, x: data.x, y: data.y } : n
            )
        );
    };

    const handleTextChange = (id: number, text: string) => {
        setNotes((prev) =>
            prev.map((n) => (n.id === id ? { ...n, text } : n))
        );
    };

    return (
        <div className="board">
            <button className="add-btn" onClick={addNote}>
                ➕ Add Note
            </button>

            <div className="notes-area" ref={containerRef}>
                {notes.map((note) => {
                    const nodeRef = createRef<HTMLDivElement>();
                    return (
                        <Draggable
                            key={note.id}
                            nodeRef={nodeRef}
                            bounds="parent"
                            defaultPosition={{ x: note.x, y: note.y }}
                            onStop={(_e, data) => handleStop(note.id, data)}
                            handle=".drag-header" // only drag by header
                        >
                            <div ref={nodeRef} className="note">
                                <div className="drag-header">🟨 Drag me</div>
                                <textarea
                                    value={note.text}
                                    onChange={(e) => handleTextChange(note.id, e.target.value)}
                                />
                            </div>
                        </Draggable>
                    );
                })}
            </div>
        </div>
    );
};

export default StickyBoard;
