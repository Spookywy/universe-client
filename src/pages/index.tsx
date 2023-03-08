import ContentButtonGroup from "@/components/contentButtonGroup";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Universe</title>
                <meta
                    name="description"
                    content="An application to retrieve the content of the universe, including planets, stars, galaxies, and all other forms of matter and energy"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className="m-8 text-center text-3xl font-bold">UNIVERSE</h1>
                <p className="mb-5 text-center">
                    The universe is all of space and time and their contents,
                    including planets, stars, galaxies, and all other forms of
                    matter and energy.
                </p>
                <p className="mb-5 text-center font-bold">
                    Let&apos;s discover it...
                </p>
                <ContentButtonGroup></ContentButtonGroup>
            </main>
        </>
    );
}
