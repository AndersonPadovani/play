"use client";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Home() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex w-full h-screen justify-center items-center gap-14">
            <button
                onClick={() => {
                    theme === "light" ? setTheme("light") : setTheme("dark");
                }}
            >
                Theme
            </button>
            <Link href={"/login"}>GoTo Login</Link>
        </div>
    );
}
