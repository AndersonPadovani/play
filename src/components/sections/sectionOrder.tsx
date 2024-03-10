import SectionAddPizzaVariety from "./sectionAddPizzaVariety";
import SectionCartItems from "./sectionCartItems";

export default function SectionOrder() {
    return (
        <section className="flex h-auto items-center w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
            <div className="container w-full grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Faça seu pedido agora
                    </h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Pronto para aproveitar a melhor pizza da cidade? Faça
                        seu pedido agora.
                    </p>
                </div>
                <SectionAddPizzaVariety />
                <SectionCartItems />
            </div>
        </section>
    );
}
