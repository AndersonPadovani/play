"use client";
import { PizzaIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ListVarietiCheck from "./listVarietiCheck";
import { Button } from "@mui/material";
import { PizzaSectionEnum, PizzaSizeEnum } from "@/app/enum/pizzaEnum";

export type ProductCartType = {
    pizzaSize: PizzaSizeEnum;
    pizzaSection: PizzaSectionEnum;
    description: string;
};

export default function SectionAddPizzaVariety() {
    const [Pizza, setPizza] = useState<ProductCartType>();

    return (
        <div className="w-full space-y-2 bg-zinc-900/70 rounded-3xl p-8">
            <h2 className="text-2xl text-zinc-300">
                Primeiro selecione uma{" "}
                <strong className="text-orange-600 uppercase">pizza</strong>
            </h2>
            <div className="grid grid-cols-5 gap-2 p-2 ">
                <Button
                    className={`bg-zinc-600/70 ${
                        Pizza?.pizzaSize === PizzaSizeEnum.pequena &&
                        "bg-orange-600 text-zinc-300"
                    } rounded-none text-lg font-bold gap-3 text-orange-600`}
                    onClick={() =>
                        setPizza({
                            pizzaSize: PizzaSizeEnum.pequena,
                            pizzaSection: PizzaSectionEnum.pequena,
                            description: `Pode escolher até ${PizzaSectionEnum.pequena} tipos de sabores para ${PizzaSizeEnum.pequena}`,
                        })
                    }
                >
                    <PizzaIcon />
                    {PizzaSizeEnum.pequena}
                </Button>
                <Button
                    className={`bg-zinc-600/70 ${
                        Pizza?.pizzaSize === PizzaSizeEnum.media &&
                        "bg-orange-600 text-zinc-300"
                    } rounded-none text-lg font-bold gap-3 text-orange-600`}
                    onClick={() =>
                        setPizza({
                            pizzaSize: PizzaSizeEnum.media,
                            pizzaSection: PizzaSectionEnum.media,
                            description: `Pode escolher até ${PizzaSectionEnum.media} tipos de sabores para ${PizzaSizeEnum.media}`,
                        })
                    }
                >
                    <PizzaIcon />
                    {PizzaSizeEnum.media}
                </Button>
                <Button
                    className={`bg-zinc-600/70 ${
                        Pizza?.pizzaSize === PizzaSizeEnum.grande &&
                        "bg-orange-600 text-zinc-300"
                    } rounded-none text-lg font-bold gap-3 text-orange-600`}
                    onClick={() =>
                        setPizza({
                            pizzaSize: PizzaSizeEnum.grande,
                            pizzaSection: PizzaSectionEnum.grande,
                            description: `Pode escolher até ${PizzaSectionEnum.grande} tipos de sabores para ${PizzaSizeEnum.grande}`,
                        })
                    }
                >
                    <PizzaIcon />
                    {PizzaSizeEnum.grande}
                </Button>
                <Button
                    className={`bg-zinc-600/70 ${
                        Pizza?.pizzaSize === PizzaSizeEnum.gigante &&
                        "bg-orange-600 text-zinc-300"
                    } rounded-none text-lg font-bold gap-3 text-orange-600`}
                    onClick={() =>
                        setPizza({
                            pizzaSize: PizzaSizeEnum.gigante,
                            pizzaSection: PizzaSectionEnum.gigante,
                            description: `Pode escolher até ${PizzaSectionEnum.gigante} tipos de sabores para ${PizzaSizeEnum.gigante}`,
                        })
                    }
                >
                    <PizzaIcon />
                    {PizzaSizeEnum.gigante}
                </Button>
                <Button
                    className={`bg-zinc-600/70 ${
                        Pizza?.pizzaSize === PizzaSizeEnum.familia &&
                        "bg-orange-600 text-zinc-300"
                    } rounded-none text-lg font-bold gap-3 text-orange-600`}
                    onClick={() =>
                        setPizza({
                            pizzaSize: PizzaSizeEnum.familia,
                            pizzaSection: PizzaSectionEnum.familia,
                            description: `Pode escolher até ${PizzaSectionEnum.familia} tipos de sabores para ${PizzaSizeEnum.familia}`,
                        })
                    }
                >
                    <PizzaIcon />
                    {PizzaSizeEnum.familia}
                </Button>
            </div>

            <div className="flex w-full p-8 flex-col gap-5">
                <h1 className="text-orange-600">{Pizza?.description}</h1>
                {Pizza && (
                    <ListVarietiCheck
                        pizzaSize={Pizza.pizzaSize}
                        pizzaSection={Pizza.pizzaSection}
                        description={Pizza.description}
                    />
                )}
            </div>
        </div>
    );
}
