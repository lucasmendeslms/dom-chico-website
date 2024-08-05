export enum UserType {
    ADMIN = "ADMIN",
    BARBER = "BARBER",
    CUSTOMER = "CUSTOMER",
}

export interface UserData {
    id?: number;
    googleAccountId: string;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    type?: UserType | UserType.CUSTOMER;
    picture?: string;
}