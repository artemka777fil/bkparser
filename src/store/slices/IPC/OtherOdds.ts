import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Ge } from "../../../types";

type StoreType = {
    odds: Ge[];
};

const initialState: StoreType = {
    odds: [],
};

export const otherOddsIPCSlice = createSlice({
    name: "otherOdds",
    initialState,
    reducers: {
        setOtherOddsIPC(state, action: PayloadAction<Ge[]>) {
            function onlyUnique(value: Ge, index: number, self: Ge[]) {
                return self.indexOf(value) === index;
            }
            const array = [...state.odds, ...action.payload];
            state.odds = array.filter(onlyUnique);
        },
    },
});

export const otherOddsIPCActions = otherOddsIPCSlice.actions;
export const otherOddsIPCReducer = otherOddsIPCSlice.reducer;
