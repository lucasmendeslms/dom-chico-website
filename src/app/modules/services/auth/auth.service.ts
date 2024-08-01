import { UserDataDto } from "../../models/dto/auth/userAuth.dto";
import { ExceptionMessage } from "../../models/dto/exceptions/exceptionMessage.dto";

const DOM_CHICO_API: string | undefined = process.env.DOM_CHICO_API;

import axios, { AxiosResponse } from "axios";

export async function getUserData(id: string): Promise<UserDataDto | ExceptionMessage> {

    try {

        const result: AxiosResponse = await axios.get(`${process.env.DOM_CHICO_API}/user/google/${id}`);

        return result.data;

    } catch (e) {
        return {
            status: 400,
            timestamp: Date(),
            path: 'azar'
        }
    }


}