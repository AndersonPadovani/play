"use client";
import { ProductType } from "@/app/utils/fakeApi";
import { Star } from "@mui/icons-material";
import Image from "next/image";

type productItemType = {
    product: ProductType;
};

export default function ProductMenuItem({ product }: productItemType) {
    return (
        <div
            className={`flex gap-5 w-full ${
                !product.disponivel && "invisible"
            } bg-zinc-600/70 rounded-xl p-3 items-center mb-8 hover:cursor-pointer`}
        >
            <Image
                src={`/img/${product.src}`}
                alt="imagen de uma pizza de peperone"
                width={120}
                height={120}
            />
            <div className="flex flex-col gap-2 h-full justify-between">
                <div className="flex flex-col ">
                    <h1 className="text-3xl font-semibold text-left text-orange-500 ">
                        {product.name}
                    </h1>
                    <p className="text-left text-zinc-400">
                        {product.description}
                    </p>
                </div>
                <div className="flex items-center justify-end pe-4">
                    <div className="flex items-center gap-2 bg-zinc-800/70 px-4 rounded-xl">
                        <strong>{product.star}</strong>
                        <Star className="text-orange-600" />
                    </div>
                </div>
            </div>
        </div>
    );
}
