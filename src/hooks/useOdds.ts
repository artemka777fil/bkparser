import { getOdds, getOddsFBTY } from "../api";
import { OddsType } from "../types";
import { useActions } from "./useActions";
import { useAppSelector } from "./useRedux";

export const useOdds = () => {
    const totalEvents = useAppSelector((state) => state.total);
    const handicapEvents = useAppSelector((state) => state.handicap);

    const totalXBetOdds = useAppSelector((state) => state["1xBetTotalOdds"]);
    const handicapXBetOdds = useAppSelector(
        (state) => state["1xBetHandicapOdds"],
    );

    const totaIPCOdds = useAppSelector((state) => state.IPCTotalOdds);
    const handicapChineOdds = useAppSelector((state) => state.IPCHandicapOdds);

    const {
        setTotalOddsXBet,
        setTotalOddsIPC,
        setTotal,
        setHandicap,
        setHandicapOddsXBet,
        setHandicapOddsIPC,
        setOtherOddsIPC,
        setOtherOddsXBet,
    } = useActions();

    const setTotalOdds = async (matchsType: number, FBTY_id?: number) => {
        const data: OddsType = await getOdds({
            id: matchsType,
        });
        data?.GE?.map((el) => {
            if (el.G === 17) {
                setTotal(el.E);
                return setTotalOddsXBet(el.E);
            }
            if (el.G === 2) {
                setHandicap(el.E);
                return setHandicapOddsXBet(el.E);
            }
            return null;
        });
        data && setOtherOddsXBet(data.GE);
        if (FBTY_id) {
            const dataFBTY = await getOddsFBTY({
                id: FBTY_id,
            });
            dataFBTY?.GE?.map((el: any) => {
                if (el.G === 17) {
                    setTotal(el.E);
                    return setTotalOddsIPC(el.E);
                }
                if (el.G === 2) {
                    setHandicap(el.E);
                    return setHandicapOddsIPC(el.E);
                }
                return null;
            });
            dataFBTY && setOtherOddsIPC(dataFBTY.GE);
        }
    };

    return {
        setTotalOdds,
        totalEvents,
        handicapEvents,
        totalXBetOdds,
        handicapXBetOdds,
        totaIPCOdds,
        handicapChineOdds,
    };
};
