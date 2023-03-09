import ContentButtonGroup from "@/components/contentButtonGroup";
import Layout from "@/components/layout";

export default function Home() {
    return (
        <Layout>
            <p className="mb-5 text-center">
                The universe is all of space and time and their contents,
                including planets, stars, galaxies, and all other forms of
                matter and energy.
            </p>
            <p className="mb-5 text-center font-bold">
                Let&apos;s discover it...
            </p>
            <ContentButtonGroup></ContentButtonGroup>
        </Layout>
    );
}
