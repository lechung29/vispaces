export enum IResponseStatus {
    Error = 0,
    Success = 1
}

export interface IFieldError {
    fieldName: string,
    errorMessage: string
}

export interface IResponseBase {
    status: IResponseStatus
    fieldError?: IFieldError
    message?: string;
}

export interface IResponseAdvance<T = any> extends IResponseBase{
    data?: T;
}