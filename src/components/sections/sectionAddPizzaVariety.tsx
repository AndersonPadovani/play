"use client";
import { Label } from "@/components/ui/label";
import { Button, Checkbox, CheckboxProps } from "@mui/material";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PizzaIcon } from "lucide-react";
import FakeApi from "@/app/utils/fakeApi";
import { useState } from "react";

type sizePizzaType = {
    size: string;
    qtd: number;
    description: string;
};

export default function SectionAddPizzaVariety() {
    const [checkedIds, setCheckedIds] = useState<string[]>([]);
    const [sizePizza, setsizePizza] = useState<sizePizzaType>();

    const handlerChecked = (checkBox: string) => {
        if (checkedIds.includes(checkBox)) {
            // Se o checkbox já está selecionado, desmarcar e removê-lo da lista
            setCheckedIds((prevCheckedIds) =>
                prevCheckedIds.filter((id) => id !== checkBox)
            );
        } else {
            // Se o checkbox não está selecionado
            const limitCheck = sizePizza?.qtd ? sizePizza.qtd : 2;
            if (checkedIds.length === limitCheck) {
                // Se já há 3 checkboxes selecionados, desmarcar o primeiro antes de adicionar o novo
                setCheckedIds((prevCheckedIds) =>
                    prevCheckedIds.slice(1).concat(checkBox)
                );
            } else {
                // Se ainda não há 3 checkboxes selecionados, apenas adicionar o novo
                setCheckedIds((prevCheckedIds) => [
                    ...prevCheckedIds,
                    checkBox,
                ]);
            }
        }
    };

    const handlerApi = () => {
        return FakeApi();
    };

    return (
        <div className="mx-auto w-full space-y-2 bg-zinc-900/70 rounded-3xl p-8">
            <div className="grid grid-cols-3 gap-2 p-2 ">
                <Button
                    className="bg-zinc-600/70 rounded-none active:bg-zinc-700/80 text-lg font-bold gap-3 text-orange-600"
                    onClick={() =>
                        setsizePizza({
                            size: "pequena",
                            qtd: 2,
                            description:
                                "Pode escolher ate 2 tipos de sabores para Pizza Pequena",
                        })
                    }
                >
                    <PizzaIcon />
                    Pequena
                </Button>
                <Button
                    className="bg-zinc-600/70 rounded-none active:bg-zinc-700/80 text-lg font-bold gap-3 text-orange-600"
                    onClick={() =>
                        setsizePizza({
                            size: "Media",
                            qtd: 3,
                            description:
                                "Pode escolher ate 3 tipos de sabores para Pizza Media",
                        })
                    }
                >
                    <PizzaIcon />
                    Media
                </Button>
                <Button
                    className="bg-zinc-600/70 rounded-none active:bg-zinc-700/80 text-lg font-bold gap-3 text-orange-600"
                    onClick={() =>
                        setsizePizza({
                            size: "Grande",
                            qtd: 4,
                            description:
                                "Pode escolher ate 4 tipos de sabores para Pizza Grande",
                        })
                    }
                >
                    <PizzaIcon />
                    Grande
                </Button>
            </div>

            <div className="flex w-full p-8 flex-col gap-5">
                <h1 className="text-orange-600">
                    {sizePizza?.description
                        ? sizePizza.description
                        : "Pode escolher ate 2 tipos de sabores para Pizza Pequena"}
                </h1>
                <RadioGroup
                    defaultValue="option-one"
                    className="grid grid-cols-5 gap-4"
                >
                    {handlerApi().pizza.map((pizza) => {
                        return (
                            <div
                                key={pizza.id}
                                className="flex items-center space-x-2"
                            >
                                <Checkbox
                                    id={pizza.id.toString()}
                                    checked={checkedIds.includes(
                                        pizza.id.toString()
                                    )}
                                    onChange={() =>
                                        handlerChecked(pizza.id.toString())
                                    }
                                />

                                <Label className="text-lg" htmlFor={pizza.id}>
                                    {pizza.name}
                                </Label>
                            </div>
                        );
                    })}
                </RadioGroup>
            </div>
            <Button className="bg-orange-500/30 w-full text-xl font-bold text-zinc-300 hover:bg-orange-500/90">
                Adcionar Pizza ao carrinho
            </Button>
        </div>
    );
}
