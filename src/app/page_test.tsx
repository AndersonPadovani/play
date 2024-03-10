"use client";
import Link from "next/link";
import { useState } from "react";
import { ButtonLoading } from "@/components/buttomLoading";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);

    async function handlerChangeButtomLoading() {
        setIsLoading(true);

        setTimeout(() => {
            console.log("Clicado!");

            setIsLoading(false);
        }, 5000);
    }

    return (
        <div className="main w-full bg-zinc-300 rounded-3xl p-5 pl-24">
            <div className="top flex items-center">
                <img src="./logo.png" alt="Logo de uma pizzaria" width={50} />

                <div className="menu flex flex-1 justify-center gap-8">
                    <Link href={""}>Pizzaria</Link>
                    <Link href={""}> Quem Somos</Link>
                    <Link href={""}>Cardápio</Link>
                    <Link href={""}>Onde Estamos</Link>
                </div>
                <div className="user flex gap-4 items-center">
                    <SearchIcon />
                    <ShoppingCartIcon />
                    {
                        <ButtonLoading
                            nameButton="LOGIN"
                            onClick={handlerChangeButtomLoading}
                            isLoading={isLoading}
                        />
                    }
                </div>
            </div>
            <div className="mid"></div>
            <div className="footer"></div>
        </div>
    );
}
