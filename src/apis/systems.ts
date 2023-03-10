import Galaxy from "@/models/systems/galaxy";
import PlanetarySystem from "@/models/systems/planetarySystem";
import { AxiosPromise } from "axios";
import apiClient from "./configs/apiClient";

export function getGalaxies(): AxiosPromise<Galaxy[]> {
    return apiClient.get("system/galaxies/");
}

export function getPlanetarySystems(): AxiosPromise<PlanetarySystem[]> {
    return apiClient.get("system/planetary-systems/");
}
