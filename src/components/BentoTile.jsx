import PortfolioStats from "./PortfolioStats";

function BentoTile({ tile, onOpenFolder }) {
    if (tile.id === "stats") {
        return <PortfolioStats />;
    }

    const Icon = tile.icon;

    function handleClick(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        onOpenFolder(tile.id, x, y);
    }

    return (
        <button
            type="button"
            className={`tile ${tile.className || ""}`}
            onClick={handleClick}
        >
            <span className="ico">
                <Icon size={22} strokeWidth={1.8} />
            </span>

            <h2>{tile.name}</h2>

            <p>{tile.description}</p>

            <span className="open">open →</span>
        </button>
    );
}

export default BentoTile;