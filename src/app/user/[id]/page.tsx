import { UserController } from "@/app/modules/controllers/user.controller"
import { UserDto } from "@/app/modules/models/dto/user.dto";
import { ExceptionMessage } from "@/app/modules/models/entities/exceptionMessage.entity";
import { UserData } from "@/app/modules/models/entities/user.entity";
import { auth } from "@/app/modules/services/auth/authGoogle.service"
import { Session } from "next-auth"
import { notFound } from "next/navigation";

export default async function User({ params }: { params: {id: number} }) {

    const session: Session | null = await auth();

    let user: UserDto | ExceptionMessage | null = null;

    if (!session) {
        throw new Error('Falha ao obter a sessão')
    }

    try {
        user = await UserController.findByGoogleId(session.user);
    } catch (error) {
        notFound();
    }

    return (
        <>
            <h2>Olá</h2>
        </>
    )
}

//https://www.youtube.com/watch?v=9fqSnw2Tz3Q 10:52

//https://nextjs.org/docs/pages/building-your-application/routing/api-routes