import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { E } from "../../../types";

type StoreType = {
    TotalMore: number[];
    TotalLess: number[];
};

const initialState: StoreType = {
    TotalMore: [],
    TotalLess: [],
};

export const totalSlice = createSlice({
    name: "total",
    initialState,
    reducers: {
        setTotal(state, action: PayloadAction<E[][]>) {
            const res = action.payload[0].concat(action.payload[1]);
            state.TotalMore = Array.from(
                new Set(
                    res
                        .filter((el) => el.T === 9)
                        .map((el) => el?.P ?? 0)
                        .concat(state.TotalMore)
                        .sort((a, b) => a - b),
                ),
            );
            state.TotalLess = Array.from(
                new Set(
                    res
                        .filter((el) => el.T === 10)
                        .map((el) => el?.P ?? 0)
                        .concat(state.TotalLess)
                        .sort((a, b) => a - b),
                ),
            );
        },
    },
});

export const totalActions = totalSlice.actions;
export const totalReducer = totalSlice.reducer;
