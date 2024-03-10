import { DrinkItem, PizzaItem } from "@/types/typesCart";

export class Cart {
    private items: (PizzaItem | DrinkItem)[] = [];

    constructor() {
        this.loadFromLocalStorage();
    }

    add(item: PizzaItem | DrinkItem) {
        this.items.push(item);
        this.saveToLocalStorage();
    }

    remove(item: PizzaItem | DrinkItem) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.saveToLocalStorage();
        }
    }

    removeById(id: number) {
        this.items = this.items.filter((item) => item.id !== id);
        this.saveToLocalStorage();
    }

    getItems() {
        return this.items;
    }

    getTotalItems() {
        return this.items.length;
    }

    getQuantityById(id: number): number {
        return this.items.filter((item) => item.id === id).length;
    }

    private saveToLocalStorage() {
        localStorage.setItem("cartItems", JSON.stringify(this.items));
    }

    private loadFromLocalStorage() {
        const storedItems = localStorage.getItem("cartItems");
        if (storedItems) {
            this.items = JSON.parse(storedItems);
        }
    }
}
