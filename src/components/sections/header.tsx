import { WhatsApp, Facebook, Instagram } from "@mui/icons-material";
import { PizzaIcon } from "lucide-react";
import Link from "next/link";

export default function SectionHeader() {
    return (
        <header className="px-5 z-10 lg:px-32 h-14 flex items-center bg-zinc-800 rounded-b-3xl rounded-bl-3xl fixed w-full">
            <div className="flex gap-4">
                <Link
                    className="flex items-center justify-center"
                    href={process.env.BASE_URL_API ?? "#"}
                >
                    <PizzaIcon className="h-6 w-6 text-zinc-300 hover:scale-150 transition-all" />
                </Link>

                <Link
                    className="flex items-center justify-center"
                    href={`https://wa.me/${process.env.CONTACT_WHATS}`}
                    target="_blank"
                >
                    <WhatsApp className="h-6 w-6 text-zinc-300 hover:scale-150 transition-all" />
                </Link>

                <Link
                    className="flex items-center justify-center"
                    href={`${process.env.CONTACT_FACEBOOK}`}
                    target="_blank"
                >
                    <Facebook className="h-6 w-6 text-zinc-300 hover:scale-150 transition-all" />
                </Link>

                <Link
                    className="flex items-center justify-center"
                    href={`${process.env.CONTACT_INSTAGRAM}`}
                    target="_blank"
                >
                    <Instagram className="h-6 w-6 text-zinc-300 hover:scale-150 transition-all" />
                </Link>
            </div>
            <nav className="ml-auto flex gap-4 sm:gap-6 text-sm font-bold text-orange-500">
                <Link
                    className="hover:underline underline-offset-4 hover:scale-125 hover:text-orange-600 transition-all"
                    href="#"
                >
                    Pedido
                </Link>
                <Link
                    className="hover:underline underline-offset-4 hover:scale-125 hover:text-orange-600 transition-all"
                    href="#"
                >
                    Preço
                </Link>
                <Link
                    className="hover:underline underline-offset-4 hover:scale-125 hover:text-orange-600 transition-all"
                    href="#"
                >
                    Sobre-Nos
                </Link>
                <Link
                    className="hover:underline underline-offset-4 hover:scale-125 hover:text-orange-600 transition-all"
                    href="#"
                >
                    Contato
                </Link>
            </nav>
        </header>
    );
}
