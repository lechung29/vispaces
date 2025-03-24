import { ILoginPayload, IRegisterPayload } from "@/model";
import { IResponseAdvance, IResponseBase } from "@/types/request";
import { API_ROUTE } from "@/utils";
import instance from "@/utils/axios";

class AuthService {
    public static registerUser(payload: IRegisterPayload): Promise<IResponseBase> {
        return instance.post(API_ROUTE.SIGNUP, payload)
    }

    public static loginUser(payload: ILoginPayload): Promise<IResponseAdvance<any>> {
        return instance.post(API_ROUTE.LOGIN, payload)
    }

    public static refreshToken(): Promise<any> {
        return instance.get(API_ROUTE.REFRESH_TOKEN)
    }
}

export {
    AuthService
}