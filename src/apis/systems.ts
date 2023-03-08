import Galaxy from "@/models/systems/galaxy";
import { AxiosPromise } from "axios";
import apiClient from "./configs/apiClient";

export function getGalaxies(): AxiosPromise<Galaxy[]> {
    return apiClient.get("system/galaxies/");
}
