import Galaxy from "./galaxy";
import System from "./system";

export default interface PlanetarySystem extends System {
    galaxy: Galaxy;
}
