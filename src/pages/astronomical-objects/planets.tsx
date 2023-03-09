import { getPlanets } from "@/apis/astronomicalObjects";
import Layout from "@/components/layout";
import Planet from "@/models/astronomicalObjects/planet";
import { useEffect, useState } from "react";

export default function Planets() {
    const [planets, setPlanets] = useState<Planet[]>([]);

    useEffect(() => {
        getPlanets().then((response) => setPlanets(response.data));
    }, []);

    return (
        <Layout>
            <p>Planets</p>
        </Layout>
    );
}
