import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


export interface IPanelState {
    openSearchPanel: boolean;
    openNotificationsPanel: boolean;
}

const initialState: IPanelState = {
    openSearchPanel: false,
    openNotificationsPanel: false,
};

const PanelSlice = createSlice({
    name: "panel",
    initialState,
    reducers: {
        toggleSearchPanel: (state, action) => {
            state.openSearchPanel = action.payload
        },
        toggleNotificationPanel: (state, action) => {
            state.openNotificationsPanel = action.payload
        },

    },
})

export const panelState = (state: RootState) => state.panel

export const { toggleSearchPanel, toggleNotificationPanel } = PanelSlice.actions

export default PanelSlice.reducer;