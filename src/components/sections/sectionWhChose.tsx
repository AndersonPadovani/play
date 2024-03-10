import { CheckCircleIcon } from "lucide-react";
import CircleIconMessage from "./circleIconMessage";

export default function SectionChose() {
    return (
        <section className="flex h-auto xl:h-screen justify-center items-center w-full py-12 md:py-24 lg:py-32 rounded-t-3xl rounded-tl-3xl bg-zinc-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Porque nos escolher
                    </h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Somos mais do que apenas pizza. Somos um modo de vida.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl max-h-max items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
                    <CircleIconMessage
                        title={"Variedade de Sabores Irresistíveis"}
                        description={`Destacamos-nos pela nossa extensa seleção de
                            sabores de pizza, cuidadosamente elaborados com
                            ingredientes frescos e de alta qualidade. Desde
                            as clássicas margheritas até combinações
                            inovadoras, nossa pizzaria oferece uma variedade
                            que agrada a todos os paladares, garantindo uma
                            experiência gastronômica única a cada visita.`}
                    />
                    <CircleIconMessage
                        title={"Compromisso com a Qualidade"}
                        description={`Na nossa pizzaria, a qualidade é a nossa
                            prioridade. Utilizamos ingredientes frescos e
                            autênticos para garantir que cada fatia seja uma
                            explosão de sabor. Desde a massa crocante até os
                            molhos caseiros, cada detalhe é cuidadosamente
                            supervisionado para proporcionar uma experiência
                            gastronômica que conquista pela frescura e pela
                            excelência.`}
                    />
                    <CircleIconMessage
                        title={"Atendimento Personalizado"}
                        description={`A nossa equipe dedicada está empenhada em
                            proporcionar um atendimento amigável e
                            eficiente. Valorizamos cada cliente e buscamos
                            criar uma atmosfera acolhedora. Desde a
                            realização de pedidos até o serviço à mesa, o
                            nosso compromisso é superar as expectativas,
                            tornando cada visita à nossa pizzaria uma
                            experiência memorável e satisfatória.`}
                    />
                </div>
            </div>
        </section>
    );
}
