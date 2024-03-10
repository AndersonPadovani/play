import { CheckCircleIcon } from "lucide-react";

type messageCircle = {
    title?: String;
    description?: String;
};

export default function CircleIconMessage(props: messageCircle) {
    return (
        <div className="flex h-full flex-col mt-8 items-center justify-center space-y-2 text-green-400 bg-green-500/10 p-8 rounded-3xl">
            <div className="flex flex-col items-center gap-2 mb-6">
                <CheckCircleIcon className="h-10 w-10 rounded-full bg-gray-100 p-2 dark:bg-gray-800" />
                <h3 className="text-xl font-bold">{props.title}</h3>
            </div>
            <div className="space-y-1.5 text-center">
                <p className="text-sm text-left text-gray-500 dark:text-gray-400">
                    {props.description}
                </p>
            </div>
        </div>
    );
}
