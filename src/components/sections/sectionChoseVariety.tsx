import { GetAllProductsList, ProductType } from "@/app/utils/fakeApi";
import ProductMenuItem from "./pizzaMenuIten";

export default async function SectionChoseVariety() {
    const products = await GetAllProductsList();

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
                    {products
                        ? products.map((pizza) => {
                              return (
                                  <ProductMenuItem
                                      key={pizza.id}
                                      product={pizza}
                                  />
                              );
                          })
                        : ""}
                </div>
            </div>
        </section>
    );
}
