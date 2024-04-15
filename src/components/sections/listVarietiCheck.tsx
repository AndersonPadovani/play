"use client";

import { Label } from "@/components/ui/label";
import { Button, Checkbox } from "@mui/material";
import { RadioGroup } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import { ProductCartType } from "./sectionAddPizzaVariety";
import { GetAllProductsList, ProductType } from "@/app/utils/fakeApi";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Cart } from "@/app/utils/cart";
import { toast } from "../ui/use-toast";

export default function ListVarietiCheck(prop: ProductCartType) {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [checkedItem, setCheckedItem] = useState<ProductType[]>([]);
    const [limitCheck, setLimitCheck] = useState(prop.pizzaSection);

    const listProduct = async () => {
        setProducts(await GetAllProductsList());
    };

    useEffect(() => {
        listProduct();
    }, []);

    if (prop.pizzaSection !== limitCheck) {
        setLimitCheck(prop.pizzaSection);
        setCheckedItem([]);
    }

    function HandlerSetCheckedItem(prodItem: ProductType) {
        let newCheckList = checkedItem.filter(
            (item) => item.name !== prodItem.name
        );

        if (newCheckList.length < checkedItem.length) {
            setCheckedItem(newCheckList);
        } else {
            if (checkedItem.length < prop.pizzaSection) {
                setCheckedItem((prevCheck) => [...prevCheck, prodItem]);
            } else {
                setCheckedItem(([first, ...prevCheck]) => [
                    ...prevCheck,
                    prodItem,
                ]);
            }
        }
    }

    const handlerAddItemsToCart = () => {
        const cart = new Cart();
        cart.addItem({
            pizzaSize: prop.pizzaSize,
            pizzaSection: prop.pizzaSection,
            produto: checkedItem,
            quantity: 1,
        });

        toast({
            title: `Adicionado ao carrihno!`,
            description: `Pizza ${prop.pizzaSize}: ${checkedItem.map(
                (item) => item.name
            )}, adicionado com sucesso ao seu carrinho!`,
        });
        setCheckedItem([]);
    };

    function HandlerValidateCheckItem(prod: ProductType): boolean {
        const have = checkedItem.find((itemCheck) => {
            return itemCheck.name === prod.name;
        });

        if (have) {
            return true;
        }

        return false;
    }

    return (
        <div>
            <RadioGroup
                defaultValue="option-one"
                className="grid grid-cols-5 gap-4"
            >
                {products &&
                    products.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="flex items-center space-x-2"
                            >
                                <Checkbox
                                    id={item.name}
                                    checked={HandlerValidateCheckItem(item)}
                                    onChange={() => HandlerSetCheckedItem(item)}
                                />

                                <Label className="text-lg" htmlFor={item.name}>
                                    {item.name}
                                </Label>
                            </div>
                        );
                    })}
            </RadioGroup>

            <Button
                onClick={handlerAddItemsToCart}
                disabled={checkedItem.length < 1 ? true : false}
                className="bg-orange-500/30 mt-10 w-full text-xl font-bold text-zinc-300 hover:bg-orange-500/90"
            >
                Adicionar Pizza ao carrinho
            </Button>
        </div>
    );
}
