import axios from "axios";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { API_BASE_URL, LOCATION, REFRESH_TOKEN, TOKEN } from "../constants";

export const isTokenExpired = (token: string) => {
    const decodedToken = jwtDecode(token);
    const expiration = decodedToken.exp! * 1000;
    return Date.now() >= expiration;
};

export const refreshAccessToken = async (refreshT: string) => {
    try {
        const res = await axios.post(`${API_BASE_URL}auth/refreshToken`, {
            refreshToken: refreshT,
        });

        const { token, refreshToken } = res.data;
        if (token && refreshToken) {
            return {
                token,
                refreshToken,
            };
        }
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        Navigate({ to: LOCATION.LOGIN });

        throw new Error("Refresh token failed")
    } catch (error) {
        console.error('Error refreshing access token:', error)
        throw error;
    }
};
