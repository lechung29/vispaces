import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface INotificationBarState {
    isShow: boolean;
    message: string;
    type: "success" | "error" | "warning" | "info";
    duration: number;
}

const initialState: INotificationBarState = {
    isShow: false,
    message: "",
    type: "success",
    duration: 5000,
};

const NotificationBarSlice = createSlice({
    name: "notificationBar",
    initialState,
    reducers: {
        showNotification(state, action) {
            state.isShow = true;
            state.message = action.payload.message;
            state.type = action.payload.type || "success";
            state.duration = 5000;
        },
        hideNotification(state) {
            state.isShow = false;
            state.message = "";
            state.type = "success";
        },
        updateDuration(state, action) {
            state.duration = action.payload;
        },
    },
})

export const notificationBarState = (state: RootState) => state.notificationBar

export const { showNotification, hideNotification, updateDuration } = NotificationBarSlice.actions

export default NotificationBarSlice.reducer;

