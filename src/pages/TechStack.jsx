import { techStack } from "../data/techStack";

function TechStack() {
    return (
        <div>
            {techStack.map((group, index) => (
                <section key={group.category}>
                    <h3>
                        {group.category}
                    </h3>

                    <div className="cols">
                        {group.technologies.map((technology) => {
                            const Icon = technology.icon;

                            return (
                                <div
                                    key={technology.name}
                                    className="card tech-card"
                                >
                                    <Icon
                                        className="tech-icon"
                                        size={28}
                                    />

                                    <span>
                                        {technology.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default TechStack;