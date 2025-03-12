import { IRegisterPayload } from "@/model";
import { IResponseBase } from "@/types/request";
import { API_ROUTE } from "@/utils";
import instance from "@/utils/axios";

class AuthService {
    public static registerUser(payload: IRegisterPayload): Promise<IResponseBase> {
        return instance.post(API_ROUTE.SIGNUP, payload)
    }

    public static loginUser(email: string, password: string): Promise<IResponseBase> {
        return instance.post(API_ROUTE.LOGIN, {
            email,
            password
        })
    }
}

export {
    AuthService
}