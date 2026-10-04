import { useState } from "react";
import { labExperiments } from "../data/lab";

function Lab() {
    const [selectedPreview, setSelectedPreview] = useState(null);

    function handlePreviewOpen(experiment) {
        setSelectedPreview(experiment);
    }

    function handlePreviewClose() {
        setSelectedPreview(null);
    }

    return (
        <div>
            <h3>PREVIOUS WORK & EXPERIMENTS</h3>

            <div className="cols">
                {labExperiments.map((experiment) => (
                    <article
                        key={experiment.id}
                        className="card"
                    >
                        {experiment.preview && (
                            <button
                                type="button"
                                className="lab-preview"
                                onClick={() =>
                                    handlePreviewOpen(experiment)
                                }
                                aria-label={`Open ${experiment.title} preview`}
                            >
                                {experiment.preview.type === "video" ? (
                                    <video
                                        src={experiment.preview.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />
                                ) : (
                                    <img
                                        src={experiment.preview.src}
                                        alt={`${experiment.title} preview`}
                                    />
                                )}

                                <span className="lab-preview-hint">
                                    View preview
                                </span>
                            </button>
                        )}

                        <div>
                            <span className="chip">
                                {experiment.category}
                            </span>

                            <span className="chip warn">
                                {experiment.status}
                            </span>
                        </div>

                        <h4>{experiment.title}</h4>

                        <p className="mut">
                            {experiment.description}
                        </p>

                        <div className="acts">
                            {experiment.repo && (
                                <a
                                    href={experiment.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    GitHub →
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            {selectedPreview && (
                <div
                    className="over lab-preview-over"
                    onClick={handlePreviewClose}
                >
                    <div
                        className="panel lab-preview-panel"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <div className="bar">
                            <span className="path">
                                {selectedPreview.title}
                            </span>

                            <button
                                type="button"
                                className="btn"
                                onClick={handlePreviewClose}
                            >
                                Close
                            </button>
                        </div>

                        <div className="body">
                            <div className="lab-preview-large">
                                {selectedPreview.preview.type ===
                                    "video" ? (
                                    <video
                                        src={
                                            selectedPreview
                                                .preview.src
                                        }
                                        autoPlay
                                        muted
                                        loop
                                        controls
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={
                                            selectedPreview
                                                .preview.src
                                        }
                                        alt={`${selectedPreview.title} preview`}
                                    />
                                )}
                            </div>

                            <h3>
                                {selectedPreview.title}
                            </h3>

                            <p className="mut">
                                {selectedPreview.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Lab;