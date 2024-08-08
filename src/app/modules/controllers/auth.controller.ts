import { IAuth } from "../models/entities/auth.entity";
import { AuthService } from "../services/auth/auth.service";

export class AuthController {

    public static async authUser(): Promise<IAuth> {
        return await AuthService.authenticateUser();
    }
}