import { Moon, Sun } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Header({ theme, setTheme, onContact }) {
    const isDark = theme === "dark";

    function handleThemeToggle() {
        setTheme(isDark ? "light" : "dark");
    }

    return (
        <header>
            <div>
                <h1>CJL</h1>

                <div className="tag">
                    Build. Learn. Improve. Repeat.
                </div>

                <p className="intro">
                    Aspiring software developer interested in building practical
                    applications, learning new technologies, and bringing ideas to life.
                </p>
            </div>

            <div className="acts">
                <button
                    className="btn"
                    type="button"
                >
                    Workspace
                </button>

                <a
                    href="/Laguitan_Resume-2026.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                >
                    Resume
                </a>

                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                >
                    <FaGithub size={16} />
                    GitHub
                </a>

                <button
                    className="btn"
                    type="button"
                    onClick={onContact}
                >
                    Contact
                </button>

                <button
                    className="btn"
                    type="button"
                    onClick={handleThemeToggle}
                    aria-label="Toggle theme"
                >
                    {isDark ? (
                        <Sun size={16} />
                    ) : (
                        <Moon size={16} />
                    )}

                    {isDark ? "Light" : "Dark"}
                </button>
            </div>
        </header>
    );
}

export default Header;