export interface ILoginPayload {
    email: string;
    password: string;
}

export interface IRegisterPayload extends ILoginPayload {
    displayName: string;
}
