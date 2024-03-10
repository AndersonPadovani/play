import { Button, Input } from "@mui/material";

export default function SectionOrder() {
    return (
        <section className="flex h-screen items-center w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Faça seu pedido agora
                    </h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Pronto para aproveitar a melhor pizza da cidade? Faça
                        seu pedido agora.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <form className="flex flex-col gap-2">
                        <Input
                            className="w-full"
                            placeholder="Digite seu e-mail"
                            type="email"
                            autoComplete="true"
                            required
                        />
                        <Button className="w-full" type="submit">
                            Faça seu Pedido
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
