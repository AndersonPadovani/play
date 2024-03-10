import Link from "next/link";

import SectionChose from "@/components/sections/sectionWhChose";
import SectionClientSay from "@/components/sections/sectionClientSay";
import SectionChoseVariety from "@/components/sections/sectionChoseVariety";
import SectionOrder from "@/components/sections/sectionOrder";
import SectionHeader from "@/components/sections/header";
import SectionLanding from "@/components/sections/sectionLanding";

export default function Pagina() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-[url('/img/get_pizza.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
            <SectionHeader />
            <main className="flex-1 ">
                <SectionLanding />

                <SectionChose />

                <SectionChoseVariety />

                <SectionOrder />
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-zinc-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Arp Dev Soltions. Todos os direitos reservados.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Termos de Serviço
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Privacidade
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
