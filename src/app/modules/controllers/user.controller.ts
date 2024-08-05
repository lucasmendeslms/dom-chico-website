import { UserDto } from "../models/dto/user.dto";
import { UserData } from "../models/entities/user.entity";
import { ExceptionMessageDto } from "../models/dto/exceptionMessage.dto";
import { UserService } from "../services/user/user.service";

export class UserController {

    public static async create(data: UserData): Promise<UserDto | ExceptionMessageDto> {
        return await UserService.create(data);
    }

    public static async findByGoogleId(id: string): Promise<UserDto | ExceptionMessageDto> {
        return await UserService.findByGoogleID(id);
    }
}