export default function SectionClientSay() {
    return (
        <section className="flex h-screen items-center w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        O que nossos clientes dizem
                    </h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Não acredite apenas em nossas palavras. Nossos clientes
                        adoram nossa pizza.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <img
                            alt="Avatar"
                            className="inline-block w-20 h-20 rounded-full object-cover object-center"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "150/150",
                                objectFit: "cover",
                            }}
                            width="150"
                        />
                        <blockquote className="text-center text-gray-500 italic not-italic/none dark:text-gray-400">
                            &quot;A melhor pizza que já comi. A massa estava
                            perfeitamente crocante e os ingredientes estavam
                            frescos e deliciosos.&quot;
                        </blockquote>
                        <p className="font-semibold">- Sarah T.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <img
                            alt="Avatar"
                            className="inline-block w-20 h-20 rounded-full object-cover object-center"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "150/150",
                                objectFit: "cover",
                            }}
                            width="150"
                        />
                        <blockquote className="text-center text-gray-500 italic not-italic/none dark:text-gray-400">
                            &quot;A melhor pizza que já comi. A massa estava
                            perfeitamente crocante e os ingredientes estavam
                            frescos e deliciosos.&quot;
                        </blockquote>
                        <p className="font-semibold">- Sarah T.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
