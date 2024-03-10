import Image from "next/image";
import Delivery from "../../../public/img/delivery.svg";

export default function SectionLanding() {
    return (
        <section className="flex h-screen w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 ">
                <div className="text-center space-y-2 bg-zinc-800/80 rounded-3xl sm:p-28 absolute">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Pizza em sua{" "}
                        <span className="text-orange-500">PORTA</span>
                    </h1>
                    <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-100">
                        Sabores irresistíveis, entregues na sua{" "}
                        <strong className="text-orange-500">porta</strong>.
                        Quentes e frescos. Rápido e conveniente. Uma fatia de
                        felicidade a cada entrega.
                    </p>

                    <Image
                        src={Delivery}
                        className="ocultar1300px max-w-[37rem] absolute left-[-300px] bottom-[-175px]"
                        alt={"Imagen de um moto boy entregando uma pizza"}
                    />
                </div>
            </div>
        </section>
    );
}
