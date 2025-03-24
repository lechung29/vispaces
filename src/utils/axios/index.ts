import axios from "axios";
import { API_BASE_URL } from "../constants";
import { AuthService } from "@/services";

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

// Process data before sending to server
instance.interceptors.request.use(async (config) => {
    if (config.url!.indexOf("/login") >=  0 || config.url!.indexOf("/refresh-token") >= 0) {
        return config
    }
    const token = window.localStorage.getItem("accessToken")
    config.headers["X-Token"] = token
    return config
}, err => {
    return Promise.resolve(err.request.data)
})

instance.interceptors.response.use(async (response) => {
    const axiosConfig = response.config
    if (axiosConfig.url!.indexOf("/login") >=  0 || axiosConfig.url!.indexOf("/google") >= 0 || axiosConfig.url!.indexOf("/refresh-token") >= 0) {
        return response.data
    }
    const { code, message } = response.data
    if ( code === 401) {
        if (message && message === "Error.Token.Expired") {
            const data = await AuthService.refreshToken()
            if (data.accessToken) {
                axiosConfig.headers["X-Token"] = data.accessToken
                window.localStorage.setItem("accessToken", data.accessToken)
                return instance(axiosConfig)
            } else {
                // store.dispatch(handleUnauthorized(data.message))
                console.log(data.message)
            }
        }
    }

    if (code === 403 || code === 500) {
        // if (message && message === "Error.Account.Locked.Expired") {
        //     console.log(message)
        // }
        console.log(message)
    }
    return response.data
}, err => {
    if (axios.isAxiosError(err) && err.code === "ECONNABORTED") {
        console.error("⚠️ Request timeout! The server took too long to respond.");
        return Promise.resolve();
    }
    return Promise.resolve(err.response.data)
})

export default instance
