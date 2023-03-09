import { getPlanets } from "@/apis/astronomicalObjects";
import { PlanetTile } from "@/components/astronomicalObjects/planetTile";
import Layout from "@/components/layout";
import Planet from "@/models/astronomicalObjects/planet";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Planets() {
    const [planets, setPlanets] = useState<Planet[]>([]);

    useEffect(() => {
        getPlanets().then((response) => setPlanets(response.data));
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
                    <PlanetTile key={index} planet={planet}></PlanetTile>
                ))}
            </div>
        </Layout>
    );
}
