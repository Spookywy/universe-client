import { getPlanetarySystems } from "@/apis/systems";
import Layout from "@/components/layout";
import SystemTile from "@/components/systems/systemTile";
import PlanetarySystem from "@/models/systems/planetarySystem";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function getStaticProps() {
    const planetarySystemsPromise = await getPlanetarySystems();
    const planetarySystems = planetarySystemsPromise.data;

    return {
        props: {
            planetarySystems,
        },
        revalidate: 60,
    };
}

type PlanetarySystemsProps = {
    planetarySystems: PlanetarySystem[];
};

export default function PlanetarySystems({
    planetarySystems,
}: PlanetarySystemsProps) {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon
                    className="text-6xl text-slate-800"
                    icon={faCircleDot}
                />
                <p className="text-lg font-semibold text-slate-800">
                    Planetary Systems
                </p>
                {planetarySystems.map((planetarySystem, index) => (
                    <SystemTile
                        key={index}
                        system={planetarySystem}
                    ></SystemTile>
                ))}
            </div>
        </Layout>
    );
}
