import { auth } from "../modules/services/auth/authGoogle.service";
import { UserDataDto } from "../modules/models/dto/auth/userAuth.dto";
import { ExceptionMessage } from "../modules/models/dto/exceptions/exceptionMessage.dto";
import { getUserData } from "../modules/services/auth/auth.service";
import { redirect } from "next/navigation";
import { Session } from "next-auth";

export default async function Auth() {

    const session: Session | null = await auth();

    let user: UserDataDto | ExceptionMessage | null = null;

    if (session && session.user && session.user.id) {
        user = await getUserData(session.user.id);
    }

    user && 'googleAccountId' in user ? redirect('/home') : redirect('/register');
}