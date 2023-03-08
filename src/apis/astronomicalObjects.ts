import Planet from "@/models/astronomicalObjects/planet";
import { AxiosPromise } from "axios";
import apiClient from "./configs/apiClient";

export function getPlanets(): AxiosPromise<Planet[]> {
    return apiClient.get("astronomical_object/planets/");
}
