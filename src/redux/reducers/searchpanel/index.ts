import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


export interface ISearchPanelState {
    openSearchPanel: boolean;
}

const initialState: ISearchPanelState = {
    openSearchPanel: false,
};

const searchPanelSlice = createSlice({
    name: "searchPanel",
    initialState,
    reducers: {
        toggleSearchPanel: (state, action) => {
            state.openSearchPanel = action.payload
        },
    },
})

export const searchPanelState = (state: RootState) => state.searchPanel

export const { toggleSearchPanel } = searchPanelSlice.actions

export default searchPanelSlice.reducer;