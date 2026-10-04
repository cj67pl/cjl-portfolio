import { projects } from "../data/projects";

function Projects({ onOpenProject }) {
    return (
        <div>
            <h3>FEATURED</h3>

            {projects.map((project) => (
                <button
                    key={project.id}
                    className="tile hero"
                    onClick={() => onOpenProject(project)}
                >
                    <h2>
                        {project.title}
                    </h2>

                    <p>
                        {project.tagline}
                    </p>

                    <p>
                        {project.description}
                    </p>

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

                    <span className="open">
                        Open project →
                    </span>
                </button>
            ))}

            <p className="mut">
                More projects will appear here as
                they're completed.
            </p>
        </div>
    );
}

export default Projects;