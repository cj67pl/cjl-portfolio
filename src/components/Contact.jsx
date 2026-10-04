import { profile } from "../data/profile";

function Contact({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="over"
            onClick={onClose}
        >
            <div
                className="panel"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <div className="bar">
                    <span className="path">
                        workspace/contact/
                    </span>

                    <button
                        type="button"
                        className="btn"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

                <div className="body">
                    <h3>CONTACT</h3>

                    <div className="card">
                        <p>
                            Want to get in touch? You can reach me
                            through the following:
                        </p>

                        <div className="acts">
                            {profile.email && (
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="btn pri"
                                >
                                    Email
                                </a>
                            )}

                            {profile.github && (
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    GitHub
                                </a>
                            )}

                            {profile.linkedin && (
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    LinkedIn
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;