import FakeApi from "@/app/utils/fakeApi";
import Peperoni from "../../../public/img/peperoni.jpg";
import PizzaMenuItem from "./pizzaMenuIten";

function handlherMenu() {
    return FakeApi();
}

export default function SectionChoseVariety() {
    return (
        <section className="flex h-auto items-center w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Escolha suas coberturas
                    </h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Faça a sua pizza única com a nossa seleção de coberturas
                        frescas.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 sm:grid-cols-2">
                    {handlherMenu().pizza.map((pizza) => {
                        return (
                            <PizzaMenuItem
                                key={pizza.id}
                                id={pizza.id}
                                src={Peperoni}
                                description={pizza.description}
                                strars={pizza.star}
                                title={pizza.name}
                                disponivel={pizza.disponivel}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
