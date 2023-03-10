import { rawApiClient } from "@/apis/configs/apiClient";
import AstronomicalObject from "@/models/astronomicalObjects/astronomicalObject";
import PlanetarySystem from "@/models/systems/planetarySystem";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

type AstronomicalObjectTileProps = {
    astronomicalObject: AstronomicalObject;
};

export function AstronomicalObjectTile({
    astronomicalObject,
}: AstronomicalObjectTileProps) {
    const [planetarySystem, setPlanetary_system] = useState<
        PlanetarySystem | undefined
    >(undefined);

    useEffect(() => {
        rawApiClient
            .get(astronomicalObject.planetary_system)
            .then((response) => setPlanetary_system(response.data));
    }, [astronomicalObject.planetary_system]);

    return (
        <div className="m-5 w-1/4 rounded-lg bg-slate-50 p-5 shadow-xl">
            <p className="mb-4 text-center text-lg font-bold uppercase">
                {astronomicalObject.name}
            </p>
            <Image
                className="m-auto mb-4 rounded-lg"
                src={astronomicalObject.image}
                width={200}
                height={200}
                alt={astronomicalObject.name}
            />
            <div className="flex">
                <p className="mr-2 font-semibold">Distance from earth:</p>
                {astronomicalObject.distance_from_earth ? (
                    <p>{astronomicalObject.distance_from_earth.toString()}</p>
                ) : (
                    <p>-</p>
                )}
            </div>
            <div className="flex">
                <p className="mr-2 font-semibold">Mass:</p>
                <p>{astronomicalObject.mass.toString()}</p>
            </div>
            <div className="flex">
                <p className="mr-2 font-semibold">Radius:</p>
                <p>{astronomicalObject.radius} km</p>
            </div>
            <div className="flex">
                <p className="mr-2 font-semibold">Surface Temperature:</p>
                <p>{astronomicalObject.surface_temperature} K</p>
            </div>
            <div className="flex">
                <p className="mr-2 font-semibold">Planetary System:</p>
                <p>{planetarySystem?.name}</p>
            </div>
            <div className="mt-2">
                <a href={astronomicalObject.url} className="text-blue-400">
                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon> Row
                    data
                </a>
            </div>
        </div>
    );
}
