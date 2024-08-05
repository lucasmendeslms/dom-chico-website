export interface UserDto {
    id: number;
    googleAccountId: string;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    type: string;
    picture?: string;
}