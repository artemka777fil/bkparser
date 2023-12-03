import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { E } from "../../../types";

type StoreType = {
    HandicapMore: number[];
    HandicapLess: number[];
};

const initialState: StoreType = {
    HandicapMore: [],
    HandicapLess: [],
};

export const handicapSlice = createSlice({
    name: "handicap",
    initialState,
    reducers: {
        setHandicap(state, action: PayloadAction<E[][]>) {
            const res = action.payload[0].concat(action.payload[1]);
            state.HandicapMore = Array.from(
                new Set(
                    res
                        .filter((el) => el.T === 8)
                        .map((el) => el?.P ?? 0)
                        .concat(state.HandicapMore)
                        .sort((a, b) => b - a),
                ),
            );
            state.HandicapLess = Array.from(
                new Set(
                    res
                        .filter((el) => el.T === 7)
                        .map((el) => el?.P ?? 0)
                        .concat(state.HandicapLess)
                        .sort((a, b) => a - b),
                ),
            );
        },
    },
});

export const handicapActions = handicapSlice.actions;
export const handicapReducer = handicapSlice.reducer;
