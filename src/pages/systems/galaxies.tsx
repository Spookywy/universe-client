import { getGalaxies } from "@/apis/systems";
import Layout from "@/components/layout";
import SystemTile from "@/components/systems/systemTile";
import Galaxy from "@/models/systems/galaxy";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function getStaticProps() {
    const galaxiesResponse = await getGalaxies();
    const galaxies = galaxiesResponse.data;

    return {
        props: {
            galaxies,
        },
        revalidate: 60,
    };
}

type GalaxiesProps = {
    galaxies: Galaxy[];
};

export default function Galaxies({ galaxies }: GalaxiesProps) {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon
                    className="text-6xl text-slate-800"
                    icon={faFan}
                />
                <p className="text-lg font-semibold text-slate-800">Galaxies</p>
                {galaxies.map((galaxy, index) => (
                    <SystemTile key={index} system={galaxy}></SystemTile>
                ))}
            </div>
        </Layout>
    );
}
