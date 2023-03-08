import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faFan, faSun } from "@fortawesome/free-solid-svg-icons";
import ContentButton from "./contentButton";

export default function ContentButtonGroup() {
    return (
        <div className="mr-20 ml-20 flex justify-between">
            <ContentButton
                name="Galaxies"
                icon={faFan}
                link="/systems/galaxies"
            ></ContentButton>
            <ContentButton
                name="Systems"
                icon={faCircleDot}
                link="/systems/planetary-systems"
            ></ContentButton>
            <ContentButton
                name="Stars"
                icon={faSun}
                link="/astronomical-objects/stars"
            ></ContentButton>
            <ContentButton
                name="Planets"
                icon={faCircle}
                link="/astronomical-objects/planets"
            ></ContentButton>
        </div>
    );
}
