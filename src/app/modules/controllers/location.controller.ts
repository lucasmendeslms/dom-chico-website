import { UserDto } from "../models/dto/user.dto";
import { IUser } from "../models/entities/user.entity";
import { UserService } from "../services/user/user.service";

export class UserController {

    public static async get(data: IUser): Promise<UserDto> {
        return await UserService.create(data);
    }

    public static async findByGoogleId(id: string): Promise<UserDto> {
        return await UserService.findByGoogleID(id);
    }
}