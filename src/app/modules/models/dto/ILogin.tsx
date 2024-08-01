export interface IProfile {
    id: string,
    name: string,
    firstName: string,
    familyName: string,
    email: string,
    picture: string,
    token_created_at: string,
    token_expires_at: string
}

export interface ISession {
    user: {
        id: string | undefined | any,
        name: string | null | undefined;
        firstName: string | any,
        // familyName: string,
        // email: string,
        // picture: string,
        token_created_at: Date | any,
        token_expires_at: Date | any
    }
}