export default class Mass {
    value: string;
    unit_of_measure: "kg" | "M☉";

    constructor(value: string, unit_of_measure: "kg" | "M☉") {
        this.value = value;
        this.unit_of_measure = unit_of_measure;
    }

    toString(): string {
        return this.value + " " + this.unit_of_measure;
    }
}
