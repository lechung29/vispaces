export enum IResponseStatus {
    Error = 0,
    Success = 1
}

export interface IResponseBase {
    status: IResponseStatus
    fieldError?: {
        fieldName: string,
        errorMessage: string
    }
    message?: string;
}

export interface IResponseAdvance<T = any> {
    responseInfo?: IResponseBase,
    data?: T;
}