"use client";
// import SvgSignUp from "@/component/signUp";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import PhoneFormat from "../utils/phoneFormat";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Page() {
    const router = useRouter();
    const [formatPhone, setFormatPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();

    function handlerToastMsg(
        title?: string | "Mensagen de alerta!",
        description?: string
    ) {
        toast({ title, description });
    }

    async function handlerSigUp(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.currentTarget);

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const password = formData.get("password") as string;

        await axios({
            baseURL: `${process.env.BASE_URL_API}/user`,
            method: "post",
            data: {
                name: name,
                email: email,
                phone: phone,
                password: password,
            },
        })
            .then(({ status }) => {
                if (status === 201) {
                    handlerToastMsg(
                        "Cadstro realizado com sucesso!",
                        `${email} cadastrado com sucesso!`
                    );

                    router.push("/login");
                }
            })
            .catch(({ response }) => {
                handlerToastMsg(
                    "Erro ao cadastrar!",
                    `${response.data.message}`
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="flex w-full justify-center">
            <form
                onSubmit={handlerSigUp}
                method="post"
                className="flex flex-col  gap-4 min-w-80 p-5 mt-20 bg-zinc-500/20 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl"
            >
                <div className="flex flex-col w-full items-center gap-4">
                    <h1 className="text-5xl tracking-widest">
                        Sign<strong className="text-blue-700">Up</strong>{" "}
                    </h1>
                    <p className="text-xs">Por favor preencha os campos</p>
                </div>

                <div className="flex w-full justify-end">
                    <Link href={"login"} className="flex justify-center">
                        <ArrowBackIcon />
                        Back
                    </Link>
                </div>

                {/* <SvgSignUp width={300} /> */}
                <label htmlFor="name">
                    Name:
                    <Input
                        id="name"
                        name="name"
                        className="border-none bg-zinc-900/40 rounded-tl-xl rounded-br-xl"
                        required
                        minLength={4}
                        autoComplete="true"
                    />
                </label>
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
                <label htmlFor="phone">
                    Phone:
                    <Input
                        id="phone"
                        name="phone"
                        value={formatPhone}
                        className="border-none bg-zinc-900/40 rounded-tl-xl rounded-br-xl"
                        minLength={16}
                        maxLength={16}
                        onChange={(e) => {
                            setFormatPhone(PhoneFormat(e.target.value));
                        }}
                        autoComplete="true"
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <Input
                        id="password"
                        name="password"
                        className="border-none bg-zinc-900/40 rounded-tl-xl rounded-br-xl"
                        type="password"
                        required
                        minLength={4}
                        autoComplete="true"
                    />
                </label>
                <button
                    type="submit"
                    className="w-full p-2 rounded-tl-xl rounded-br-xl bg-blue-500 mt-4 hover:bg-blue-700"
                >
                    {isLoading ? "Await..." : "SignUp"}
                </button>
            </form>
        </div>
    );
}
