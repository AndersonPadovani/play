"use client";

import axios from "axios";
import { FormEvent } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const { toast } = useToast();

    function handlerToastMsg(
        title?: string | "Mensagen de alerta!",
        description?: string
    ) {
        toast({ title, description });
    }

    async function handlerLogin(e: FormEvent<HTMLFormElement>) {
        const email = e.currentTarget["email"].value;
        const password = e.currentTarget["password"].value;
        e.preventDefault();

        await axios({
            baseURL: `${process.env.BASE_URL_API}/login/email`,
            method: "post",
            data: { email: email, password: password },
        })
            .then(({ data }) => {
                alert(data.JWT);
                handlerToastMsg("Logado com sucesso!", `${email}`);
                router.push("/");
            })
            .catch((error) => {
                const errorMsg = error.response.data["message"];
                handlerToastMsg("Erro ao efetuar o login!", errorMsg);
            });
    }
    return (
        <div className="flex items-center justify-center h-screen bg-zinc-800">
            <form
                onSubmit={handlerLogin}
                className="flex flex-col items-center w-full gap-5 bg-zinc-500/20 p-8 shadow-md max-w-md rounded-tl-3xl rounded-br-3xl drop-shadow-2xl"
                method="post"
            >
                <div>
                    <h1 className="text-5xl tracking-widest">
                        Sign<strong className="text-blue-700">In</strong>{" "}
                    </h1>
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <label
                        className="block text-gray-300 text-sm font-bold mb-2"
                        form="email"
                    >
                        Email
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full bg-zinc-700  border-none rounded-xl px-3 py-2 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            autoComplete="on"
                        />
                    </label>

                    <label
                        className="block text-gray-300 text-sm font-bold mb-2"
                        form="password"
                    >
                        Password
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            className="w-full bg-zinc-700 border-none rounded-xl px-3 py-2 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            minLength={4}
                            autoComplete="on"
                        />
                    </label>
                </div>

                <div className="flex w-full pl-4 pr-4 justify-between text-zinc-300">
                    <Link href={"/signup"} className="hover:underline">
                        Create an account
                    </Link>
                    <Link href={"/forgout"} className="hover:underline">
                        Forgout password
                    </Link>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 mt-3 hover:bg-blue-700 text-zinc-300 font-bold py-2 px-4 w-full rounded-full"
                >
                    LOGIN
                </button>
            </form>
        </div>
    );
}
