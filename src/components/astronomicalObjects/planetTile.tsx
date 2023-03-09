import Planet from "@/models/astronomicalObjects/planet";

type PlanetTileProps = {
    planet: Planet;
};

export function PlanetTile({ planet }: PlanetTileProps) {
    return (
        <div className="m-5 rounded-lg p-5 shadow-xl">
            <p className="font-semibold">{planet.name}</p>
            <p>Distance from earth:</p>
            <p>Mass:</p>
            <p>Radius:</p>
            <p>Surface temperature:</p>
            <p>Planetary system:</p>
            <a href={planet.url} className="text-blue-400">
                Row data
            </a>
        </div>
    );
}
