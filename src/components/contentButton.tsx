import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ContentButtonGroupProps = {
    name: string;
    icon: IconProp;
};

export default function ContentButton({ name, icon }: ContentButtonGroupProps) {
    return (
        <div className="flex h-80 w-60 flex-col items-center justify-center rounded-lg bg-slate-200 shadow-xl">
            <FontAwesomeIcon className="text-6xl text-slate-800" icon={icon} />
            <p className="mt-5 text-2xl font-bold text-slate-800">{name}</p>
        </div>
    );
}
