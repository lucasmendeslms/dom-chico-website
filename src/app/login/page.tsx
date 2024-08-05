'use client'

import Image from 'next/image'
import primaryLogo from '@/logos/primaryLogo.png'
import barbershopIcon from '@/barbershopIcon.svg'
import GoogleButton from 'react-google-button'
import { signIn } from 'next-auth/react'

export default function Login () {

    return (
        <div className="flex flex-col h-screen items-center p-12 overflow-hidden">
            <div className="w-screen flex justify-center">
                <Image src={primaryLogo} alt="" className="mx-2"/>
            </div>
            <div className="flex h-screen w-full items-center justify-center bg-cover bg-center ">
                <div className="mx-4 flex max-w-md flex-col items-center justify-center rounded-lg p-8 md:mx-0 outline outline-offset-8 outline-soft-orange">
                    <div className="mb-8 flex w-full flex-col items-center justify-center relative">

                        <Image src={barbershopIcon} alt="" className="absolute left-0 -top-1 -m-6 fill-blue-600" width={20} height={20}/>
                        <Image src={barbershopIcon} alt="" className="absolute right-0 -top-1 -m-6" width={20} height={20}/>

                        <h1 className="text-6xl font-road-rage text-soft-orange text-center text-pretty">Bem vindo a Dom Chico</h1>
                        <p className="antialiased m-2 p-2 text-center text-slate-300">Para a sua segurança, utilize sua conta Google para realizar o login</p>
                    </div>

                    <GoogleButton
                    type="dark"
                    label="Entre com o Google"
                    onClick={() => signIn("google", { callbackUrl: "/auth" })}
                    />
                </div>
            </div>
        </div>
    )
}