// cart.ts

type CartItem = {
    id: number;
    quantity: number;
    data: Record<string, any>; // Objeto que representa o item no carrinho
};

export class Cart {
    private static CART_KEY = "CARTSHOP";

    private items: CartItem[];

    constructor() {
        // Carregando itens do localStorage
        const storedCart = localStorage.getItem(Cart.CART_KEY);
        this.items = storedCart ? JSON.parse(storedCart) : [];
    }

    private saveToLocalStorage() {
        localStorage.setItem(Cart.CART_KEY, JSON.stringify(this.items));
    }

    addItem(item: CartItem["data"]) {
        const existingItem = this.items.find(
            (cartItem) => cartItem.id === item.id
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ id: item.id, quantity: 1, data: item });
        }

        this.saveToLocalStorage();
    }

    removeItem(id: number) {
        this.items = this.items.filter((item) => item.id !== id);
        this.saveToLocalStorage();
    }

    getQuantidadeById(id: number): number {
        const item = this.items.find((cartItem) => cartItem.id === id);
        return item ? item.quantity : 0;
    }

    getItems() {
        return this.items.map((item) => item.data);
    }
}
