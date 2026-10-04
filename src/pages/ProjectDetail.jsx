function ProjectDetail({ project, onClose }) {
    return (
        <div>
            <button
                className="btn"
                onClick={onClose}
            >
                ← projects/
            </button>

            <h3>
                {project.title}
            </h3>

            {project.preview && (
                <div className="project-preview">
                    <img
                        src={project.preview.src}
                        alt={project.preview.alt}
                    />
                </div>
            )}

            <div className="card">
                <p>
                    <b>{project.tagline}</b>
                </p>

                <p className="mut">
                    {project.description}
                </p>
            </div>
            {(project.github || project.demo) && (
                <>
                    <h3>LINKS</h3>

                    <div className="acts">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="btn"
                            >
                                GitHub
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="btn pri"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </>
            )}

            {/* <div className="mock">
                <div className="tb">
                    <i />
                    <i />
                    <i />
                </div>

                <div className="mb">
                    <div className="sb" />

                    <div>
                        <div className="row s" />
                        <div className="row" />
                        <div className="row" />
                        <div className="row" />
                    </div>
                </div>
            </div> */}

            {project.problem && (
                <>
                    <h3>PROBLEM IT SOLVES</h3>

                    <div className="card">
                        <p>
                            {project.problem}
                        </p>
                    </div>
                </>
            )}

            {project.contribution && (
                <>
                    <h3>MY CONTRIBUTION</h3>

                    <div className="card">
                        <p>
                            {project.contribution}
                        </p>
                    </div>
                </>
            )}

            {project.features?.length > 0 && (
                <>
                    <h3>KEY FEATURES</h3>

                    <div className="card">
                        <ul>
                            {project.features.map(
                                (feature) => (
                                    <li key={feature}>
                                        {feature}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </>
            )}

            {project.architecture && (
                <>
                    <h3>ARCHITECTURE</h3>

                    <div className="card">
                        <p className="tree">
                            {project.architecture}
                        </p>
                    </div>
                </>
            )}

            {project.decisions?.length > 0 && (
                <>
                    <h3>DEVELOPMENT DECISIONS</h3>

                    <div className="card">
                        <ul>
                            {project.decisions.map(
                                (decision) => (
                                    <li key={decision}>
                                        {decision}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </>
            )}

            <h3>TECHNOLOGIES</h3>

            <div>
                {project.technologies.map(
                    (technology) => (
                        <span
                            key={technology}
                            className="chip"
                        >
                            {technology}
                        </span>
                    )
                )}
            </div>

            
        </div>
    );
}

export default ProjectDetail;