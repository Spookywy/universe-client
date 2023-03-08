import PlanetarySystem from "../systems/planetarySystem";
import DistanceFromEarth from "../utils/distanceFromEarth";
import Mass from "../utils/mass";

export default interface AstronomicalObject {
    url: string;
    name: string;
    image: string;
    distance_from_earth: DistanceFromEarth;
    mass: Mass;
    radius: number;
    surface_temperature: number;
    planetary_system: PlanetarySystem;
}
