import { notes } from "../data/notes";

function DevNotes() {
    return (
        <div>
            <div className="cols">
                {notes.map((note, index) => (
                    <article
                        key={note.id}
                        className="note"
                        style={{
                            transform:
                                `rotate(${index % 2 === 0
                                    ? "-1deg"
                                    : "1deg"
                                })`,
                        }}
                    >
                        <b>{note.title}</b>

                        <p>
                            {note.excerpt}
                        </p>

                        {note.date && (
                            <p className="mut">
                                {note.date}
                            </p>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
}

export default DevNotes;