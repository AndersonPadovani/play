"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ChangeEvent, FormEvent } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page({
    searchParams,
}: {
    searchParams: {
        forgoutToken: string | undefined;
    };
}) {
    const router = useRouter();

    const { toast } = useToast();

    const validaSenhas = (event: ChangeEvent<HTMLInputElement>) => {
        const rePass = event?.target.value;

        const password = document.getElementById(
            "password"
        ) as HTMLInputElement;

        if (password.value !== rePass) {
            event?.target.setCustomValidity("As senha não são iguais!");
        } else {
            event?.target.setCustomValidity("");
        }
    };

    async function handlerForgoutPass(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const password = event.currentTarget["password"].value;

        await axios({
            baseURL: `${process.env.BASE_URL_API}/changePass`,
            method: "post",
            data: {
                forgoutToken: searchParams.forgoutToken,
                password: password,
            },
        })
            .then(() => {
                toast({
                    title: "Forgout Your Password",
                    description: `Senha alterada com sucesso!`,
                });

                setTimeout(() => {
                    router.push("/login");
                }, 2000);
            })
            .catch(({ response }) => {
                toast({
                    title: "Forgout Error!",
                    description: `${response.data.message}`,
                });
            });
    }

    return (
        <div className="flex w-full justify-center">
            <form
                onSubmit={handlerForgoutPass}
                method="post"
                className="flex flex-col gap-4 min-w-80 p-5 mt-20 bg-zinc-500/20 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl"
            >
                <div className="flex flex-col w-full items-center gap-4">
                    <h1 className="text-3xl tracking-widest">
                        Change
                        <strong className="text-blue-700">
                            {" "}
                            Password
                        </strong>{" "}
                    </h1>
                    <p className="text-xs">
                        Por favor preencha com sua nova senha
                    </p>
                </div>

                <div className="flex w-full justify-end">
                    <Link href={"/login"} className="flex justify-center">
                        <ArrowBackIcon />
                        Back
                    </Link>
                </div>

                <label htmlFor="password">
                    password:
                    <Input
                        id="password"
                        name="password"
                        className="border-none bg-zinc-900/40 rounded-tl-xl rounded-br-xl"
                        type="password"
                        required
                        autoComplete="true"
                    />
                </label>

                <label htmlFor="re_pass">
                    repeat password:
                    <Input
                        id="re_pass"
                        name="re_pass"
                        className="border-none bg-zinc-900/40 rounded-tl-xl rounded-br-xl"
                        type="password"
                        required
                        autoComplete="true"
                        onChange={validaSenhas}
                    />
                </label>

                <button
                    type="submit"
                    className="w-full p-2 rounded-tl-xl rounded-br-xl bg-blue-500 mt-4 hover:bg-blue-700"
                >
                    Recuperar
                </button>
            </form>
        </div>
    );
}
