"use client";

import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <>
            <head>
                <title>Error Page</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
                    integrity="sha512-GGowCB8g8MDkjeT8fLzQG1DE5ZIjzgFn3FGJ/WsJHfgcZW5gzgy6oWm1YZ8RkTJk9rEvzLp8IC4cXmCgGhNRxQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>
            <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Oops! Something went wrong.
                    </h1>
                    <p className="text-lg text-gray-300 mb-8">
                        We're sorry, but an error has occurred. Please try again
                        later.
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                        onClick={() => reset()}
                    >
                        Go back
                    </button>
                </div>
            </div>
        </>
    );
}
