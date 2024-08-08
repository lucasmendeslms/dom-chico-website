export enum UserType {
    ADMIN = "ADMIN",
    BARBER = "BARBER",
    CUSTOMER = "CUSTOMER",
}

export interface IUser {
    id?: number;
    googleAccountId: string;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    type?: string;
    picture?: string;
}