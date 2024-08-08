import { Session } from "next-auth";
import { IUser } from "./user.entity";

export interface IAuth {
    isAuthorized: boolean;
    hasSession: boolean;
    session?: Session;
    user?: IUser;
}