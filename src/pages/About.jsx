import { aboutData } from "../data/about";

function About() {
    return (
        <div>
            <h3>HELLO</h3>

            <p>
                {aboutData.intro}
            </p>

            <h3>DIRECTION</h3>

            <p style={{ marginBottom: "35px" }}>
                {aboutData.description}
            </p>

            <div className="cols">
                <div className="card">
                    <b>Education</b>

                    <p className="mut">
                        {aboutData.education}
                    </p>
                </div>

                <div className="card">
                    <b>I enjoy building</b>

                    <p className="mut">
                        {aboutData.building}
                    </p>
                </div>

                <div className="card">
                    <b>Philosophy</b>

                    <p className="mut">
                        {aboutData.philosophy}
                    </p>
                </div>

                <div className="card">
                    <b>Personal</b>

                    <p className="mut">
                        {aboutData.personal}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;