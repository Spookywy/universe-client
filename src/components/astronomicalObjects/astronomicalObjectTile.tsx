import { rawApiClient } from "@/apis/configs/apiClient";
import AstronomicalObject from "@/models/astronomicalObjects/astronomicalObject";
import Star from "@/models/astronomicalObjects/star";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import useSWR from "swr";

type AstronomicalObjectTileProps = {
    astronomicalObject: AstronomicalObject;
};

export function AstronomicalObjectTile({
    astronomicalObject,
}: AstronomicalObjectTileProps) {
    const isStar = () => {
        return "classification" in astronomicalObject;
    };

    const { data: planetarySystem } = useSWR(
        astronomicalObject.planetary_system,
        rawApiClient
    );

    return (
        <div className="m-5 flex w-96 flex-col items-center rounded-lg bg-slate-50 p-5 shadow-xl">
            <p className="mb-4 text-center text-lg font-bold uppercase">
                {astronomicalObject.name}
            </p>
            {astronomicalObject.image && (
                <Image
                    className="mb-4 rounded-lg"
                    src={astronomicalObject.image}
                    width={200}
                    height={200}
                    alt={astronomicalObject.name}
                />
            )}
            <div>
                <div className="flex">
                    <p className="mr-2 font-semibold">Distance from earth:</p>
                    {astronomicalObject.distance_from_earth ? (
                        <p>
                            {astronomicalObject.distance_from_earth.value}{" "}
                            {
                                astronomicalObject.distance_from_earth
                                    .unit_of_measure
                            }
                        </p>
                    ) : (
                        <p>-</p>
                    )}
                </div>
                <div className="flex">
                    <p className="mr-2 font-semibold">Mass:</p>
                    <p>
                        {astronomicalObject.mass.value}{" "}
                        {astronomicalObject.mass.unit_of_measure}
                    </p>
                </div>
                <div className="flex">
                    <p className="mr-2 font-semibold">Radius:</p>
                    <p>{astronomicalObject.radius} km</p>
                </div>
                <div className="flex">
                    <p className="mr-2 font-semibold">Surface Temperature:</p>
                    <p>{astronomicalObject.surface_temperature} K</p>
                </div>
                {isStar() && (
                    <div className="flex">
                        <p className="mr-2 font-semibold">Classification:</p>
                        <p>{(astronomicalObject as Star).classification}</p>
                    </div>
                )}
                <div className="flex">
                    <p className="mr-2 font-semibold">Planetary System:</p>
                    <p>{planetarySystem?.name}</p>
                </div>
                <div className="mt-3 text-center">
                    <a href={astronomicalObject.url} className="text-blue-400">
                        <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>{" "}
                        Raw data
                    </a>
                </div>
            </div>
        </div>
    );
}
