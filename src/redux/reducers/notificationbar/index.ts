import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface INotificationBarState {
    isShow: boolean;
    message: string;
    type?: "success" | "error" | "warning" | "info";
}

const initialState: INotificationBarState = {
    isShow: false,
    message: "",
};

const NotificationBarSlice = createSlice({
    name: "notificationBar",
    initialState,
    reducers: {
        showNotification(state, action) {
            state.isShow = true;
            state.message = action.payload.message;
            state.type = action.payload.type || "success";
        },
        hideNotification(state) {
            state.isShow = false;
            state.message = "";
            state.type = undefined;
        },
    },
})

export const notificationBarState = (state: RootState) => state.notificationBar

export const { showNotification, hideNotification } = NotificationBarSlice.actions

export default NotificationBarSlice.reducer;

