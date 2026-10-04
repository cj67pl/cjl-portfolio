import { FaGithub } from "react-icons/fa";
import { githubData } from "../data/github";

function Github() {
    return (
        <div>
            <h3>PROFILE</h3>

            <div className="card">
                <p>
                    <FaGithub
                        size={15}
                        style={{
                            verticalAlign: "middle",
                            marginRight: "5px",
                        }}
                    />

                    <b>
                        @{githubData.username}
                    </b>
                </p>

                <a
                    href={githubData.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                >
                    Open GitHub profile →
                </a>
            </div>

            <h3>PINNED</h3>

            <div className="cols">
                {githubData.repositories.map(
                    (repository) => (
                        <div
                            key={repository.id}
                            className="card"
                        >
                            <b>
                                {repository.name}
                            </b>

                            <p className="mut">
                                {repository.description}
                            </p>

                            <div>
                                {repository.technologies?.map(
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
                    )
                )}
            </div>

            <p className="mut">
                Repository data is maintained manually
                for now.
            </p>
        </div>
    );
}

export default Github;