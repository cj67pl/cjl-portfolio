import { useEffect, useState } from "react";

import About from "../pages/About";
import Projects from "../pages/Projects";
import TechStack from "../pages/TechStack";
import Learning from "../pages/Learning";
import DevNotes from "../pages/DevNotes";
import Lab from "../pages/Lab";
import Github from "../pages/Github";
import ProjectDetail from "../pages/ProjectDetail";

const folderComponents = {
    about: About,
    projects: Projects,
    tech: TechStack,
    learning: Learning,
    notes: DevNotes,
    lab: Lab,
    github: Github,
};

function FolderView({
    folder,
    origin,
    onClose,
}) {
    const [closing, setClosing] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (!folder) {
            return;
        }

        setClosing(false);
        setSelectedProject(null);

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [folder]);

    if (!folder) {
        return null;
    }

    const FolderContent = folderComponents[folder];

    if (!FolderContent) {
        return null;
    }

    function handleClose() {
        setClosing(true);

        setTimeout(() => {
            setClosing(false);
            setSelectedProject(null);
            onClose();
        }, 200);
    }

    function handleProjectOpen(project) {
        setSelectedProject(project);
    }

    function handleProjectClose() {
        setSelectedProject(null);
    }

    const panelStyle = origin
        ? {
            "--ox": `${origin.x}px`,
            "--oy": `${origin.y}px`,
        }
        : undefined;

    return (
        <div
            className={`over ${closing ? "out" : ""}`}
            onClick={handleClose}
        >
            <div
                className="panel"
                style={panelStyle}
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <div className="bar">
                    <button
                        type="button"
                        className="btn"
                        onClick={handleClose}
                    >
                        ← Back to Workspace
                    </button>

                    <span className="path">
                        workspace/{folder}/
                    </span>
                </div>

                <div className="body">
                    {selectedProject ? (
                        <ProjectDetail
                            project={selectedProject}
                            onClose={handleProjectClose}
                        />
                    ) : (
                        <FolderContent
                            onOpenProject={
                                handleProjectOpen
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default FolderView;