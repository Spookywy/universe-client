export default class DistanceFromEarth {
    value: string;
    unit_of_measure: "km" | "ly";

    constructor(value: string, unit_of_measure: "km" | "ly") {
        this.value = value;
        this.unit_of_measure = unit_of_measure;
    }

    toString(): string {
        return this.value + " " + this.unit_of_measure;
    }
}
