import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { totalOddsXBetReducer } from "./slices/1xBet/TotalOdds";
import { handicapOddsXBetReducer } from "./slices/1xBet/HandicapOdds";
import { otherOddsXBetReducer } from "./slices/1xBet/OtherOdds";
import { totalOddsIPCReducer } from "./slices/IPC/TotalOdds";
import { handicapOddsIPCReducer } from "./slices/IPC/HandicapOdds";
import { otherOddsIPCReducer } from "./slices/IPC/OtherOdds";
import { totalReducer } from "./slices/total/TotalOdds";
import { handicapReducer } from "./slices/handicap/HandicapOdds";

const rootReducer = combineReducers({
    "1xBetTotalOdds": totalOddsXBetReducer,
    "1xBetHandicapOdds": handicapOddsXBetReducer,
    "1xBetOtherOdds": otherOddsXBetReducer,
    IPCTotalOdds: totalOddsIPCReducer,
    IPCHandicapOdds: handicapOddsIPCReducer,
    IPCOtherOdds: otherOddsIPCReducer,
    total: totalReducer,
    handicap: handicapReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
