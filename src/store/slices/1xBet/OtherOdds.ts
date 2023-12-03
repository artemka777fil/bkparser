import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Ge } from "../../../types";

type StoreType = {
    odds: Ge[];
};

const initialState: StoreType = {
    odds: [],
};

export const otherOddsXBetSlice = createSlice({
    name: "otherOdds",
    initialState,
    reducers: {
        setOtherOddsXBet(state, action: PayloadAction<Ge[]>) {
            function onlyUnique(value: Ge, index: number, self: Ge[]) {
                return self.indexOf(value) === index;
            }
            const array = [...state.odds, ...action.payload];
            state.odds = array.filter(onlyUnique);
        },
    },
});

export const otherOddsXBetActions = otherOddsXBetSlice.actions;
export const otherOddsXBetReducer = otherOddsXBetSlice.reducer;
