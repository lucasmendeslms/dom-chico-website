import { UserDto } from "../../models/dto/user.dto";
import { UserService } from "../user/user.service";
import { ExceptionMessage } from "../../models/entities/exceptionMessage.entity";
import { Session } from "next-auth";
import { auth } from "./authGoogle.service";
import { IUser } from "../../models/entities/user.entity";
import { IAuth } from "../../models/entities/auth.entity";

export class AuthService {

    private static errorPathDefault: string = `${process.env.NEXT_PUBLIC_ERROR_DEFAULT_PATH}` || '';

    public static async authenticateUser(): Promise<IAuth> {

        const session: Session | null = await auth();

        try {

            if (session && session.user) {

                // const now: number = new Date().getTime();

                // if (now > session.user.expires_at) {
                //     console.log(`expires: ${session.user.expires_at}`)
                //     console.log(`now: ${now}`)
                //     return { isAuthorized: false, hasSession: false }
                // }

                const user : IUser = await UserService.findByGoogleID(session.user.id);

                return { isAuthorized: true, hasSession: true, session, user }

            }

            return { isAuthorized: false, hasSession: false }


        } catch (error) {

            // const now: number = new Date().getTime();

            return session ? { isAuthorized: false, hasSession: true } : { isAuthorized: false, hasSession: false }
        }
    }
}