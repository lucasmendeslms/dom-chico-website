import Image from 'next/image'
import secondLogo from '@/logos/secondLogo.png'
import mustacheIcon from '@/mustacheIcon.svg'
import RegistrationForm from "./components/registrationForm";
import { Session } from 'next-auth';
import { auth } from '../modules/services/auth/authGoogle.service';


export default async function Register () {

    const session: Session | null = await auth();

    return (
        <div>
            <div className="flex flex-col items-center">
                <Image src={secondLogo} alt="" className="m-12"/>
                <div className="bg-[#BEBBBB] rounded-lg max-w-96 flex flex-col gap-2 mt-4 border-4 border-soft-orange items-center relative pt-14">
                    <div className="rounded-full bg-[#BEBBBB] w-28 h-28 border-2 border-[#585F71] flex justify-center items-center absolute -inset-y-16">
                        <Image src={mustacheIcon} alt="" className="mx-2" height={38} width={78}/>
                    </div>
                    <p className="text-center text-[#514F4F] mx-10"> Para prosseguirmos, por favor complete o seu cadastro </p>
                    <RegistrationForm session={session}/>
                </div>
            </div>
        </div>
    )
}