import { auth } from "../modules/services/auth/authGoogle.service";
import { UserDto } from "../modules/models/dto/user.dto";
import { ExceptionMessageDto } from "../modules/models/dto/exceptionMessage.dto";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import { AuthController } from "../modules/controllers/auth.controller";

export default async function Auth() {

    const session: Session | null = await auth();

    let user: UserDto | ExceptionMessageDto | null = null;

    if (session && session.user && session.user.id) {
        user = await AuthController.authUser(session.user.id);
    }

    user && 'googleAccountId' in user ? redirect(`/user/${user.id}`) : redirect('/register');
}