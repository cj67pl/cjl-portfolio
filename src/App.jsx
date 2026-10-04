import { useEffect, useState } from "react";

import Header from "./components/Header";
import BentoGrid from "./components/BentoGrid";
import FolderView from "./components/FolderView";
import Contact from "./components/Contact";

function App() {
    const [theme, setTheme] = useState("dark");
    const [openFolder, setOpenFolder] = useState(null);
    const [folderOrigin, setFolderOrigin] = useState(null);
    const [contactOpen, setContactOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            theme
        );
    }, [theme]);

    function handleOpenFolder(folder, x, y) {
        setFolderOrigin({ x, y });
        setOpenFolder(folder);
    }

    function handleCloseFolder() {
        setOpenFolder(null);
        setFolderOrigin(null);
    }

    return (
        <>
            <div className="wrap">
                <Header
                    theme={theme}
                    setTheme={setTheme}
                    onContact={() => setContactOpen(true)}
                />

                <BentoGrid
                    onOpenFolder={handleOpenFolder}
                />
            </div>

            <FolderView
                folder={openFolder}
                origin={folderOrigin}
                onClose={handleCloseFolder}
            />

            <Contact
                isOpen={contactOpen}
                onClose={() => setContactOpen(false)}
            />
        </>
    );
}

export default App;