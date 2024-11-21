export enum IResponseStatus {
    Error = 0,
    Success = 1
}

export interface IResponseBase {
    message: string;
    responseInfo: {
        status: IResponseStatus
        fieldError?: string
    }
}

export interface IResponseAdvance<T = any> extends IResponseBase{
    data: T;
}