import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type ContentButtonGroupProps = {
    name: string;
    icon: IconProp;
    link: string;
};

export default function ContentButton({
    name,
    icon,
    link,
}: ContentButtonGroupProps) {
    return (
        <Link href={link}>
            <div className="m-2 flex h-36 w-96 cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-200 shadow-xl hover:translate-x-0.5 hover:translate-y-0.5 md:h-52 md:w-44 lg:h-64 lg:w-52">
                <FontAwesomeIcon
                    className="text-6xl text-slate-800"
                    icon={icon}
                />
                <p className="mt-5 text-2xl font-bold text-slate-800">{name}</p>
            </div>
        </Link>
    );
}
