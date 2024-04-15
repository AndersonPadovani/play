import axios from "axios";

export type ProductType = {
    id: number;
    category: string;
    name: string;
    star: number;
    src: string;
    disponivel: boolean;
    description: string;
};

export async function GetAllProductsList2(): Promise<ProductType[] | []> {
    const { data } = await axios({
        url: `${process.env.BASE_URL_API}/cart`,
        method: "get",
    }).catch((error) => []);

    return data;
}

export async function GetAllProductsList(): Promise<ProductType[] | []> {
    return [
        {
            id: 1,
            category: "Pizza",
            name: "Margherita",
            star: 4.5,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Molho de tomate, mussarela fresca, manjericão e azeite de oliva.",
        },
        {
            id: 2,
            category: "Pizza",
            name: "Calabresa",
            star: 4.2,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Calabresa fatiada, molho de tomate, mussarela e cebola.",
        },
        {
            id: 3,
            category: "Pizza",
            name: "Quatro Queijos",
            star: 4.8,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Mussarela, gorgonzola, parmesão e provolone derretidos sobre a massa.",
        },
        {
            id: 4,
            category: "Pizza",
            name: "Vegetariana",
            star: 4.0,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Uma mistura colorida de legumes frescos, molho de tomate e queijo.",
        },
        {
            id: 5,
            category: "Pizza",
            name: "Frango com Catupiry",
            star: 4.3,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Frango desfiado, catupiry, molho de tomate e milho verde.",
        },
        {
            id: 6,
            category: "Pizza",
            name: "Peperoni",
            star: 3.4,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Carne bovina, de porco, gordura e temperado com pepperoncino.",
        },
        {
            id: 7,
            category: "Pizza",
            name: "Mediterrânea",
            star: 4.6,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Azeitonas pretas, tomate seco, rúcula, mussarela e molho pesto.",
        },
        {
            id: 8,
            category: "Pizza",
            name: "Portuguesa",
            star: 4.1,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Presunto, ovos, cebola, azeitonas, molho de tomate e mussarela.",
        },
        {
            id: 9,
            category: "Pizza",
            name: "Mexicana",
            star: 4.0,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Carne moída, pimentão, cebola, molho de tomate, mussarela e pimenta.",
        },
        {
            id: 10,
            category: "Pizza",
            name: "Fungi",
            star: 4.2,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Cogumelos frescos, molho de tomate, mussarela e manjericão.",
        },
        {
            id: 11,
            category: "Pizza",
            name: "Havaiana",
            star: 4.3,
            disponivel: true,
            src: "peperoni.png",
            description: "Presunto, abacaxi, molho de tomate e mussarela.",
        },
        {
            id: 12,
            category: "Pizza",
            name: "Ranch",
            star: 4.4,
            disponivel: true,
            src: "peperoni.png",
            description: "Frango, bacon, molho ranch, cebola e mussarela.",
        },
        {
            id: 13,
            category: "Pizza",
            name: "Caprese",
            star: 4.7,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Tomate, mussarela de búfala, manjericão, azeite de oliva e molho pesto.",
        },
        {
            id: 14,
            category: "Pizza",
            name: "Carbonara",
            star: 4.5,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Bacon, ovos, queijo parmesão, pimenta preta e molho branco.",
        },
        {
            id: 15,
            category: "Pizza",
            name: "Primavera",
            star: 4.1,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Abobrinha, berinjela, tomate cereja, espinafre, mussarela e molho de tomate.",
        },
        {
            id: 16,
            category: "Pizza",
            name: "Prosciutto",
            star: 4.6,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Presunto de Parma, rúcula, queijo parmesão, tomate seco e molho de tomate.",
        },
        {
            id: 17,
            category: "Pizza",
            name: "Diavola",
            star: 4.2,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Salame picante, molho de tomate, mussarela e azeitonas.",
        },
        {
            id: 18,
            category: "Pizza",
            name: "Pesto Chicken",
            star: 4.4,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Frango grelhado, molho pesto, tomate cereja e queijo feta.",
        },
        {
            id: 19,
            category: "Pizza",
            name: "Alho e Ervas",
            star: 4.0,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Mussarela, alho assado, ervas frescas e azeite de oliva.",
        },
        {
            id: 20,
            category: "Pizza",
            name: "Siciliana",
            star: 4.3,
            disponivel: true,
            src: "peperoni.png",
            description:
                "Aliche, azeitonas pretas, alho, molho de tomate e mussarela.",
        },
    ];
}
