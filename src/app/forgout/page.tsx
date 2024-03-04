"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FormEvent } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
    const router = useRouter();
    const { toast } = useToast();

    async function handlerForgoutPass(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const email = event.currentTarget["email"].value;

        await axios({
            baseURL: `${process.env.BASE_URL_API}/forgout`,
            method: "post",
            data: {
                email: email,
            },
        })
            .then(() => {
                toast({
                    title: "Forgout Your Password",
                    description: `Enviamos um email para ${email}, com um link de recuperação`,
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
                    <h1 className="text-4xl tracking-widest">
                        Forgot
                        <strong className="text-blue-700">
                            {" "}
                            Password
                        </strong>{" "}
                    </h1>
                    <p className="text-xs">Por favor preencha seu email</p>
                </div>

                <div className="flex w-full justify-end">
                    <Link href={"/login"} className="flex justify-center">
                        <ArrowBackIcon />
                        Back
                    </Link>
                </div>

                <label htmlFor="email">
                    Email:
                    <Input
                        id="email"
                        name="email"
                        className="border-none bg-zinc-900/40 rounded-tl-xl rounded-br-xl"
                        type="email"
                        required
                        autoComplete="true"
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
