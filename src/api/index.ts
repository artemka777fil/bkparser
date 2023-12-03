import axios from "axios";

interface ISportsMatchParams {
    sport: number;
}
interface IOddsParams {
    id: number;
}

const { REACT_APP_XBET, REACT_APP_FBTY } = process.env;

export const getSportsMatch = async ({ sport }: ISportsMatchParams) => {
    const res = await axios.get(
        `${REACT_APP_XBET}/Get1x2_VZip?sports=${sport}&count=50&mode=4&country=22&getEmpty=true`,
    );
    return res.data.Value;
};
export const getSportsMatchFBTY = async ({ sport }: ISportsMatchParams) => {
    const res = await axios.post(`${REACT_APP_FBTY}/getList`, {
        languageType: "RUS",
        oddsType: 1,
        current: 1,
        orderBy: 1,
        isPC: true,
        sportId: sport,
        type: 1,
    });
    return res.data.data.records;
};

export const getOdds = async ({ id }: IOddsParams) => {
    const res = await axios.get(
        `${REACT_APP_XBET}/GetGameZip?id=${id}&isSubGames=true&GroupEvents=true&allEventsGroupSubGames=true&countevents=250&country=22&fcountry=22&marketType=1&gr=70&isNewBuilder=true`,
    );
    return res.data.Value;
};
export const getOddsFBTY = async ({ id }: IOddsParams) => {
    const res = await axios.post(`${REACT_APP_FBTY}/getMatchDetail`, {
        languageType: "RUS",
        oddsType: 1,
        matchId: id,
    });
    const obj = res.data.data.mg
        .map((odd: any) => {
            if (odd.nm === "1x2") {
                const result = odd.mks[0].op.map((el: any, index: number) => [
                    {
                        C: el.od,
                        G: 1,
                        T: index + 1,
                    },
                ]);
                return {
                    E: result,
                    G: 1,
                };
            }
            if (odd.nm === "Гандикап") {
                const allOdds = odd.mks.map((el: any) => el.op.flat()).flat();
                const lessOdds = allOdds
                    .filter((el: any) => el.ty === 1)
                    .map((el: any) => ({
                        C: el.od,
                        G: 2,
                        P: Number(el.li),
                        T: 7,
                    }));
                const moreOdds = allOdds
                    .filter((el: any) => el.ty === 2)
                    .map((el: any) => ({
                        C: el.od,
                        G: 2,
                        P: Number(el.li),
                        T: 8,
                    }));
                return {
                    E: [lessOdds, moreOdds],
                    G: 2,
                };
            }
            if (odd.nm === "Больше/меньше") {
                const allOdds = odd.mks.map((el: any) => el.op.flat()).flat();
                const lessOdds = allOdds
                    .filter((el: any) => el.ty === 5)
                    .map((el: any) => ({
                        C: el.od,
                        G: 17,
                        P: Number(el.li),
                        T: 10,
                    }));
                const moreOdds = allOdds
                    .filter((el: any) => el.ty === 4)
                    .map((el: any) => ({
                        C: el.od,
                        G: 17,
                        P: Number(el.li),
                        T: 9,
                    }));
                return {
                    E: [lessOdds, moreOdds],
                    G: 17,
                };
            }
            return null;
        })
        .filter((el: any) => el !== null);
    return {
        GE: obj,
    };
};
