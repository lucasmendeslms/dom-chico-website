import { UserDto } from "../../models/dto/user.dto";
import { ExceptionMessageDto } from "../../models/dto/exceptionMessage.dto";
import { UserService } from "../user/user.service";

export class AuthService {

    public static async getUserData(id: string): Promise<UserDto | ExceptionMessageDto> {

        try {

            return await UserService.findByGoogleID(id);

        } catch (e) {

            return {
                status: 400,
                timestamp: new Date().toISOString(),
                path: `authService/getUserData/${id}`,
            }

        }
    }
}