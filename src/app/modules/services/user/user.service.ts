import { UserDto } from "../../models/dto/user.dto";
import { IUser } from "../../models/entities/user.entity";
import { UserType } from "../../models/entities/user.entity";
import { ExceptionMessageDto } from "../../models/dto/exceptionMessage.dto";
import axios, { AxiosResponse } from "axios";
import { ExceptionMessage } from "../../models/entities/exceptionMessage.entity";

export class UserService {

    private static baseURL: string = `${process.env.NEXT_PUBLIC_API_URL}/users` || '';
    private static errorPathDefault: string = `${process.env.NEXT_PUBLIC_ERROR_DEFAULT_PATH}` || '';

    public static async findByGoogleID(id: string): Promise<UserDto> {

        try {

            const result: AxiosResponse<UserDto> = await axios.get(`${this.baseURL}/google/${id}`);

            return result.data;

        } catch (error) {

            if (axios.isAxiosError(error) && error.response) {
                const errorAxiosMessage: ExceptionMessageDto = error.response.data
                throw new ExceptionMessage(errorAxiosMessage.status, errorAxiosMessage.message, errorAxiosMessage.path, errorAxiosMessage.timestamp);
                // throw new ExceptionMessage(errorAxiosMessage.status, errorAxiosMessage.message, errorAxiosMessage.path);
            }

            throw new ExceptionMessage(500, 'Internal server error', `${this.errorPathDefault}/user/findByGoogleID`)
        }
    }

    public static async create(userData: IUser): Promise<UserDto> {

        try {

            const { googleAccountId, name, cpf, phone, email, type, picture } = userData;

            const result: AxiosResponse <UserDto> = await axios.post(`${this.baseURL}`, {
                googleAccountId,
                name,
                cpf,
                phone,
                email,
                type: type ?? UserType.CUSTOMER,
                picture
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return result.data;

        } catch (error) {

            if (axios.isAxiosError(error) && error.response) {
                const errorAxiosMessage: ExceptionMessageDto = error.response.data
                throw new ExceptionMessage(errorAxiosMessage.status, errorAxiosMessage.message, errorAxiosMessage.path);
            }

            throw new ExceptionMessage(500, 'Internal server error', `${this.errorPathDefault}/user/create`)

        }
    }
}