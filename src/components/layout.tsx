import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
            <header className="m-8 text-center">
                <Link href="/" className="text-3xl font-bold">
                    UNIVERSE
                </Link>
            </header>
            <main>{children}</main>
        </>
    );
}
