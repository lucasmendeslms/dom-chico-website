import { UserDto } from "../../models/dto/user.dto";
import { UserData } from "../../models/entities/user.entity";
import { UserType } from "../../models/entities/user.entity";
import { ExceptionMessageDto } from "../../models/dto/exceptionMessage.dto";
import axios, { AxiosResponse } from "axios";

export class UserService {

    private static baseURL: string | undefined = `${process.env.NEXT_PUBLIC_API_URL}/user`;

    public static async findByGoogleID(id: string): Promise<UserDto | ExceptionMessageDto> {

        try {

            const result: AxiosResponse<UserDto> = await axios.get(`${this.baseURL}/google/${id}`);

            return result.data;

        } catch (error) {

            if (axios.isAxiosError(error) && error.response?.data) {
                return error.response.data;
            }

            return ({
                status: 500,
                timestamp: new Date().toISOString(),
                path: `${process.env.ERROR_DEFAULT_PATH}/user/findByGoogleID`,
                message: "Internal server error",
            })
        }
    }

    public static async create(userData: UserData): Promise<UserDto | ExceptionMessageDto> {

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

            // console.log(result.data)
            return result.data;

        } catch (error) {

            if (axios.isAxiosError(error) && error.response?.data) {
                console.log(error.response.data);
            }

            return ({
                status: 500,
                timestamp: new Date().toISOString(),
                path: `${process.env.ERROR_DEFAULT_PATH}/user/create`,
                message: "Internal server error",
            })

        }
    }
}