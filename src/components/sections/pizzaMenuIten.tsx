"use client";
import { Star } from "@mui/icons-material";
import Image from "next/image";
import { Button } from "@mui/material";
import { PizzaItem } from "@/types/typesCart";

export default function PizzaMenuItem(prop: PizzaItem) {
    return (
        <div
            className={`flex gap-5 w-full ${
                !prop.disponivel && "invisible"
            } bg-zinc-600/70 rounded-xl p-3 items-center mb-8 hover:cursor-pointer`}
        >
            <Image
                src={prop.src}
                alt="imagen de uma pizza de peperone"
                className="rounded-full max-w-28 max-h-28"
            />
            <div className="flex flex-col gap-2 h-full justify-between">
                <div className="flex flex-col ">
                    <h1 className="text-3xl font-semibold text-left text-orange-500 ">
                        {prop.title}
                    </h1>
                    <p className="text-left text-zinc-400">
                        {prop.description}
                    </p>
                </div>
                <div className="flex items-center justify-end pe-4">
                    <div className="flex items-center gap-2 bg-zinc-800/70 px-4 rounded-xl">
                        <strong>{prop.strars}</strong>
                        <Star className="text-orange-600" />
                    </div>
                </div>
            </div>
        </div>
    );
}
