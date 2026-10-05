import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

function PortfolioStats() {
    const [stats, setStats] = useState({
        visits: 0,
        likes: 0,
    });

    const [liked, setLiked] = useState(() => {
        return sessionStorage.getItem("portfolio-liked") === "true";
    });
    
    useEffect(() => {
        async function loadStats() {
            try {
                const response = await fetch("/api/stats");

                if (!response.ok) {
                    throw new Error("Failed to load stats");
                }

                const data = await response.json();

                setStats(data);
            } catch (error) {
                console.error(
                    "Failed to load portfolio stats:",
                    error
                );
            }
        }

        async function recordVisit() {
            const hasVisited = sessionStorage.getItem("portfolio-visited");

            if (hasVisited) {
                return;
            }

            // Set this immediately to prevent duplicate requests
            sessionStorage.setItem("portfolio-visited", "true");

            try {
                const response = await fetch("/api/stats", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        action: "visit",
                    }),
                });

                if (!response.ok) {
                    throw new Error("Failed to record visit");
                }

                const data = await response.json();

                // Use the updated database values
                setStats(data);
            } catch (error) {
                // Allow another attempt if the request failed
                sessionStorage.removeItem("portfolio-visited");

                console.error(
                    "Failed to record portfolio visit:",
                    error
                );
            }
        }

        loadStats();
        recordVisit();
    }, []);

    async function handleLike() {
        if (liked) return;

        try {
            const response = await fetch("/api/stats", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    action: "like",
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to like portfolio");
            }

            const data = await response.json();

            setStats(data);
            setLiked(true);
            sessionStorage.setItem("portfolio-liked", "true");

        } catch (error) {
            console.error(
                "Failed to like portfolio:",
                error
            );
        }
    }

    return (
        <div className="tile t-stats">
            <div className="stats-count">
                <span>Visits</span>
                <strong>{stats.visits}</strong>
            </div>

            <div className="stats-count stats-like">
                <span>Likes</span>
                <strong>{stats.likes}</strong>

                <button
                    type="button"
                    className={`stats-heart ${liked ? "liked" : ""}`}
                    onClick={handleLike}
                    aria-label={
                        liked
                            ? "Portfolio liked"
                            : "Like this portfolio"
                    }
                    disabled={liked}
                >
                    <Heart
                        size={30}
                        strokeWidth={1.8}
                        fill={liked ? "currentColor" : "none"}
                    />
                </button>
            </div>
        </div>
    );
}

export default PortfolioStats;