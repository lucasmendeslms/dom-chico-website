import ResponsiveAppBar from "./components/appBar";
import { IAuth } from "../modules/models/entities/auth.entity";
import { AuthService } from "../modules/services/auth/auth.service";

import mustacheIcon from '@/mustacheIcon.svg'
import Image from "next/image";

export default async function Home() {

    const userDataAuth: IAuth = await AuthService.authenticateUser();

    return (
        <div className="overflow-hidden h-screen flex flex-col">
            <ResponsiveAppBar userAuth={userDataAuth}/>
            <div className="w-screen h-screen flex flex-col gap-10 content-center items-center justify-center">
                <div className="rounded-full bg-[#BEBBBB] w-28 h-28 border-2 border-[#585F71] flex justify-center items-center -inset-y-16">
                    <Image src={mustacheIcon} alt="" className="mx-2" height={38} width={78}/>
                </div>

                <a href="/appointment"  className="bg-soft-orange p-7 rounded-lg font-bold text-white text-3x1">
                    Agendar um horário
                </a>
                <button className="bg-soft-orange p-7 rounded-lg font-bold text-white text-3x1">Visualizar agendamentos</button>
            </div>
        </div>
    );
}