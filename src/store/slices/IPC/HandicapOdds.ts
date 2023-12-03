import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { E } from "../../../types";

type StoreType = {
    HandicapLast: E[];
    HandicapFirst: E[];
};

const initialState: StoreType = {
    HandicapLast: [],
    HandicapFirst: [],
};

export const handicapOddsIPCSlice = createSlice({
    name: "handicapOdds",
    initialState,
    reducers: {
        setHandicapOddsIPC(state, action: PayloadAction<E[][]>) {
            const res = action.payload[0].concat(action.payload[1]);
            state.HandicapFirst = res
                .filter((el) => el.T === 7)
                .map((el) => ({
                    ...el,
                    P: el?.P ?? 0,
                }));
            state.HandicapLast = res
                .filter((el) => el.T === 8)
                .map((el) => ({
                    ...el,
                    P: el?.P ?? 0,
                }));
        },
    },
});

export const handicapOddsIPCActions = handicapOddsIPCSlice.actions;
export const handicapOddsIPCReducer = handicapOddsIPCSlice.reducer;
