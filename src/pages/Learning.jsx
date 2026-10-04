import { learningData } from "../data/learning";

function Learning() {
    return (
        <div>
            <h3>CURRENTLY</h3>

            <div className="tree">
                {learningData.currently?.join("\n")}
            </div>

            <h3>LEARNING</h3>

            <div className="cols">
                {learningData.learning?.map(
                    (item) => (
                        <div
                            key={item.title}
                            className="card"
                        >
                            <b>{item.title}</b>

                            <p className="mut">
                                {item.description}
                            </p>
                        </div>
                    )
                )}
            </div>

            <h3>COMFORTABLE USING</h3>

            <div>
                {learningData.comfortable?.map(
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

            <h3>CONCEPTS I'M WORKING ON</h3>

            <div>
                {learningData.concepts?.map(
                    (concept) => (
                        <span
                            key={concept}
                            className="chip"
                        >
                            {concept}
                        </span>
                    )
                )}
            </div>

            <h3>GOALS</h3>

            <div className="card">
                <ul>
                    {learningData.goals?.map(
                        (goal) => (
                            <li key={goal}>
                                {goal}
                            </li>
                        )
                    )}
                </ul>
            </div>

            {/* <h3>TRAINING & COURSES</h3>

            <div className="card">
                <ul>
                    {learningData.courses?.map(
                        (course) => (
                            <li key={course}>
                                {course}
                            </li>
                        )
                    )}
                </ul>
            </div> */}
        </div>
    );
}

export default Learning;