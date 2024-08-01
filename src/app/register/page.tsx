import Image from 'next/image'
import logo from '@/logo.svg'
import mustacheIcon from '@/mustacheIcon.svg'
import { Avatar } from "@mui/material"
import RegistrationForm from "../components/register/registrationForm";
import { Session } from 'next-auth';
import { auth } from '../modules/services/auth/authGoogle.service';

export default async function Register () {

    const session: Session | null = await auth();

    return (
        <div>
            <div>
                <Image src={logo} alt="" className="mx-2"/>
                <div>
                    {/* <Avatar alt="icon" src={mustacheIcon}/> */}
                    <Image src={mustacheIcon} alt="" className="mx-2 border border-red-600"/>
                    <p> Para prosseguirmos, por favor complete o seu cadastro </p>
                    <RegistrationForm session={session}/>
                </div>
            </div>
        </div>
    )
}