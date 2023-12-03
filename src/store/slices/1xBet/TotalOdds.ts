import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { E } from "../../../types";

type StoreType = {
    TotalMore: E[];
    TotalLess: E[];
};

const initialState: StoreType = {
    TotalMore: [],
    TotalLess: [],
};

export const totalOddsXBetSlice = createSlice({
    name: "totalOdds",
    initialState,
    reducers: {
        setTotalOddsXBet(state, action: PayloadAction<E[][]>) {
            const res = action.payload[0].concat(action.payload[1]);
            state.TotalMore = res.filter((el) => el.T === 9);
            state.TotalLess = res.filter((el) => el.T === 10);
        },
    },
});

export const totalOddsXBetActions = totalOddsXBetSlice.actions;
export const totalOddsXBetReducer = totalOddsXBetSlice.reducer;
