import { PizzaSectionEnum, PizzaSizeEnum } from "../enum/pizzaEnum";
import { ProductType } from "./fakeApi";

export type CartItemType = {
    quantity: number;
    pizzaSize: PizzaSizeEnum;
    pizzaSection: PizzaSectionEnum;
    produto: ProductType[];
};

export class Cart {
    private static CART_KEY = "CARTSHOP";

    public items: CartItemType[];

    constructor() {
        let storedCart;
        if (typeof window !== "undefined") {
            storedCart = localStorage.getItem(Cart.CART_KEY);
        }
        this.items = storedCart ? JSON.parse(storedCart) : [];
    }

    private saveToLocalStorage() {
        localStorage.setItem(Cart.CART_KEY, JSON.stringify(this.items));
    }

    addItem(order: CartItemType) {
        // Verifica se o carrinho está vazio
        if (this.items.length === 0) {
            this.items.push(order);
        } else {
            let found = false;

            // Itera sobre os itens existentes no carrinho
            for (let i = 0; i < this.items.length; i++) {
                const listItem = this.items[i];

                // Verifica se os produtos são os mesmos
                const sameProduct = listItem.produto.every((prod) =>
                    order.produto.some((item) => item.name === prod.name)
                );

                // Verifica se o tamanho é o mesmo
                const sameSize = listItem.pizzaSize === order.pizzaSize;

                if (sameProduct) {
                    if (sameSize) {
                        // Se o produto e o tamanho forem iguais, incrementa a quantidade
                        listItem.quantity += 1;
                        found = true;
                        break;
                    }
                }
            }

            // Se o produto não foi encontrado com o mesmo tamanho, adiciona como um novo pedido
            if (!found) {
                this.items.push(order);
            }
        }

        this.saveToLocalStorage();
    }

    getCartLengh() {
        return this.items.length;
    }

    getItems() {
        return this.items.map((cartItem) => ({
            item: cartItem.produto,
            quantity: cartItem.quantity,
        }));
    }
}
