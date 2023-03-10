import { getPlanetarySystems } from "@/apis/systems";
import Layout from "@/components/layout";
import SystemTile from "@/components/systems/systemTile";
import PlanetarySystem from "@/models/systems/planetarySystem";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function PlanetarySystems() {
    const [planetarySystems, setPlanetarySystems] = useState<PlanetarySystem[]>(
        []
    );

    useEffect(() => {
        getPlanetarySystems().then((response) =>
            setPlanetarySystems(response.data)
        );
    }, []);

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon
                    className="text-6xl text-slate-800"
                    icon={faCircleDot}
                />
                <p className="text-lg font-semibold text-slate-800">
                    Planetary Systems
                </p>
                {planetarySystems.map((planetarySystem, index) => (
                    <SystemTile
                        key={index}
                        system={planetarySystem}
                    ></SystemTile>
                ))}
            </div>
        </Layout>
    );
}
