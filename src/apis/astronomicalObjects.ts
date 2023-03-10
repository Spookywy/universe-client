import Planet from "@/models/astronomicalObjects/planet";
import Star from "@/models/astronomicalObjects/star";
import { AxiosPromise } from "axios";
import apiClient from "./configs/apiClient";

export function getPlanets(): AxiosPromise<Planet[]> {
    return apiClient.get("astronomical_object/planets/");
}

export function getStars(): AxiosPromise<Star[]> {
    return apiClient.get("astronomical_object/stars/");
}
