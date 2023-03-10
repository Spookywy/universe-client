import { getPlanets } from "@/apis/astronomicalObjects";
import { AstronomicalObjectTile } from "@/components/astronomicalObjects/astronomicalObjectTile";
import Layout from "@/components/layout";
import Planet from "@/models/astronomicalObjects/planet";
import DistanceFromEarth from "@/models/utils/distanceFromEarth";
import Mass from "@/models/utils/mass";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Planets() {
    const [planets, setPlanets] = useState<Planet[]>([]);

    useEffect(() => {
        getPlanets().then((response) => {
            let planets = response.data;
            planets.forEach((planet) => {
                let mass = planet.mass;
                planet.mass = new Mass(mass.value, mass.unit_of_measure);

                let distanceFromEarth = planet.distance_from_earth;
                if (!distanceFromEarth) return;

                planet.distance_from_earth = new DistanceFromEarth(
                    distanceFromEarth.value,
                    distanceFromEarth.unit_of_measure
                );
            });
            setPlanets(planets);
        });
    }, []);

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon
                    className="text-6xl text-slate-800"
                    icon={faCircle}
                />
                <p className="text-lg font-semibold text-slate-800">Planets</p>
                {planets.map((planet, index) => (
                    <AstronomicalObjectTile
                        key={index}
                        astronomicalObject={planet}
                    ></AstronomicalObjectTile>
                ))}
            </div>
        </Layout>
    );
}
