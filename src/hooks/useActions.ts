import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { xBet, Total, IPC, Handicap } from "../store/slices";

const { totalOddsXBetActions, handicapOddsXBetActions, otherOddsXBetActions } =
    xBet;
const { totalOddsIPCActions, handicapOddsIPCActions, otherOddsIPCActions } =
    IPC;
const { totalActions } = Total;
const { handicapActions } = Handicap;

const actions = {
    ...totalOddsXBetActions,
    ...handicapOddsXBetActions,
    ...otherOddsXBetActions,
    ...totalOddsIPCActions,
    ...handicapOddsIPCActions,
    ...otherOddsIPCActions,
    ...totalActions,
    ...handicapActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
