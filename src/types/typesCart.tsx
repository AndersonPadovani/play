import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type PizzaItem = {
    id: number;
    src: string | StaticImport;
    title: string;
    description: string;
    strars: number;
    disponivel: boolean;
};

export type DrinkItem = {
    id: number;
    src: string | StaticImport;
    title: string;
    description: string;
    disponivel: boolean;
};
