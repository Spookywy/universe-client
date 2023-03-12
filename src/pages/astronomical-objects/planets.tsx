import { getPlanets } from "@/apis/astronomicalObjects";
import { AstronomicalObjectTile } from "@/components/astronomicalObjects/astronomicalObjectTile";
import Layout from "@/components/layout";
import Planet from "@/models/astronomicalObjects/planet";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function getStaticProps() {
    const planetsResponse = await getPlanets();
    const planets = planetsResponse.data;

    return {
        props: {
            planets,
        },
        revalidate: 60,
    };
}

type PlanetsProps = {
    planets: Planet[];
};

export default function Planets({ planets }: PlanetsProps) {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon
                    className="text-6xl text-slate-800"
                    icon={faCircle}
                />
                <p className="text-lg font-semibold text-slate-800">Planets</p>
                {planets.map((planet, index) => (
                    <AstronomicalObjectTile
                        key={index}
                        astronomicalObject={planet}
                    ></AstronomicalObjectTile>
                ))}
            </div>
        </Layout>
    );
}
