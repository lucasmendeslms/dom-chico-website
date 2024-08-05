import { UserDto } from "../models/dto/user.dto";
import { ExceptionMessageDto } from "../models/dto/exceptionMessage.dto";
import { AuthService } from "../services/auth/auth.service";

export class AuthController {

    public static async authUser(id: string): Promise<UserDto | ExceptionMessageDto> {
        return await AuthService.getUserData(id);
    }
}