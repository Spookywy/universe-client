import AstronomicalObject from "./astronomicalObject";

export default interface Star extends AstronomicalObject {
    classification: "o" | "b" | "a" | "f" | "g" | "k" | "m";
}
