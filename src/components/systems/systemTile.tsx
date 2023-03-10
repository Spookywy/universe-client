import { rawApiClient } from "@/apis/configs/apiClient";
import Galaxy from "@/models/systems/galaxy";
import PlanetarySystem from "@/models/systems/planetarySystem";
import System from "@/models/systems/system";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

type SystemTileProps = {
    system: System;
};

export default function SystemTile({ system }: SystemTileProps) {
    const [galaxy, setGalaxy] = useState<Galaxy | undefined>(undefined);

    const isPlanetarySystem = () => {
        return "galaxy" in system;
    };

    useEffect(() => {
        if (isPlanetarySystem())
            rawApiClient
                .get((system as PlanetarySystem).galaxy)
                .then((response) => setGalaxy(response.data));
    });

    return (
        <div className="m-5 flex w-1/4 flex-col items-center rounded-lg bg-slate-50 p-5 shadow-xl">
            <p className="mb-4 text-center text-lg font-bold uppercase">
                {system.name}
            </p>
            {system.image && (
                <Image
                    className="mb-4 rounded-lg"
                    src={system.image}
                    width={200}
                    height={200}
                    alt={system.name}
                />
            )}
            <div className="flex">
                <p className="mr-2 font-semibold">Mass:</p>
                <p>
                    {system.mass.value} {system.mass.unit_of_measure}
                </p>
            </div>
            {galaxy && (
                <div className="flex">
                    <p className="mr-2 font-semibold">Galaxy:</p>
                    <p>{galaxy.name}</p>
                </div>
            )}
            <div className="mt-3 text-center">
                <a href={system.url} className="text-blue-400">
                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon> Raw
                    data
                </a>
            </div>
        </div>
    );
}
