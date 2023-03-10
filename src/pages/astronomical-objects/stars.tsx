import { getStars } from "@/apis/astronomicalObjects";
import { AstronomicalObjectTile } from "@/components/astronomicalObjects/astronomicalObjectTile";
import Layout from "@/components/layout";
import Star from "@/models/astronomicalObjects/star";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Stars() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        getStars().then((response) => setStars(response.data));
    }, []);

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon
                    className="text-6xl text-slate-800"
                    icon={faSun}
                />
                <p className="text-lg font-semibold text-slate-800">Stars</p>
                {stars.map((star, index) => (
                    <AstronomicalObjectTile
                        key={index}
                        astronomicalObject={star}
                    ></AstronomicalObjectTile>
                ))}
            </div>
        </Layout>
    );
}
