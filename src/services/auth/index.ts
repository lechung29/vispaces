import { IResponseBase } from "@/types/request";
import { API_ROUTE } from "@/utils";
import axiosClient from "@/utils/axios";

class AuthService {
    public static registerUser(email: string, displayName: string, password: string): Promise<IResponseBase> {
        return axiosClient.post(API_ROUTE.SIGNUP, {
            email,
            displayName,
            password,
        }).then(response => response.data)
    }

    public static loginUser(email: string, password: string): Promise<IResponseBase> {
        return axiosClient.post(API_ROUTE.LOGIN, {
            email,
            password
        }).then(response => response.data)
    }
}

export {
    AuthService
}