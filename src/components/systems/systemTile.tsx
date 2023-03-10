import { rawApiClient } from "@/apis/configs/apiClient";
import PlanetarySystem from "@/models/systems/planetarySystem";
import System from "@/models/systems/system";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import useSWR from "swr";

type SystemTileProps = {
    system: System;
};

export default function SystemTile({ system }: SystemTileProps) {
    const isPlanetarySystem = () => {
        return "galaxy" in system;
    };

    const { data: galaxy } = useSWR(
        isPlanetarySystem() ? (system as PlanetarySystem).galaxy : null,
        rawApiClient
    );

    return (
        <div className="m-5 flex w-96 flex-col items-center rounded-lg bg-slate-50 p-5 shadow-xl">
            <p className="mb-4 text-center text-lg font-bold uppercase">
                {system.name}
            </p>
            {system.image && (
                <Image
                    className="mb-4 h-auto w-72 rounded-lg"
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
