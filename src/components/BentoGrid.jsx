import BentoTile from "./BentoTile";
import { workspaceTiles } from "../data/workspace";

function BentoGrid({ onOpenFolder }) {
    return (
        <main className="grid">
            {workspaceTiles.map((tile) => (
                <BentoTile
                    key={tile.id}
                    tile={tile}
                    onOpenFolder={onOpenFolder}
                />
            ))}
        </main>
    );
}

export default BentoGrid;