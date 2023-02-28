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
                <h1>Universe</h1>
            </main>
        </>
    );
}
