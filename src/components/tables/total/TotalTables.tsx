import { FC, ReactNode, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useOdds } from "../../../hooks/useOdds";
import { OddContainer } from "../../common";

interface IProps {
    type: "TOTAL" | "HANDICAP";
}

interface IThead {
    type: "more" | "less";
    event: "TOTAL" | "HANDICAP";
}
interface IBody {
    total: number[];
    getOdd: (totalValue: number, type: "1xBet" | "Chine") => ReactNode;
}
interface ITh {
    children: string;
}
interface ITd {
    children: string | number | ReactNode;
}

const TH = ({ children }: ITh) => {
    return <th className="text-center">{children}</th>;
};
const Thead = ({ type, event }: IThead) => {
    const getName = () => {
        if (event === "HANDICAP") return type === "more" ? "К1" : "К2";
        return type === "more" ? "Больше" : "Меньше";
    };
    return (
        <thead>
            <tr>
                <TH>{getName()}</TH>
                <TH>1xBet</TH>
                <TH>FBTY</TH>
            </tr>
        </thead>
    );
};

const TD = ({ children }: ITd) => {
    return <td className="text-center">{children}</td>;
};
const Body = ({ total, getOdd }: IBody) => {
    return (
        <tbody>
            {total.map((el) => (
                <tr key={el}>
                    <TD>{el}</TD>
                    <OddContainer value={getOdd(el, "1xBet")} />
                    <OddContainer value={getOdd(el, "Chine")} />
                </tr>
            ))}
        </tbody>
    );
};

export const TotalTables: FC<IProps> = ({ type }) => {
    const {
        totalEvents,
        handicapEvents,
        totalXBetOdds,
        handicapXBetOdds,
        totaIPCOdds,
        handicapChineOdds,
    } = useOdds();
    const getOdd = (typeBK: "1xBet" | "Chine") => {
        const bkItemsTotal = typeBK === "1xBet" ? totalXBetOdds : totaIPCOdds;
        const bkItemsHandicap =
            typeBK === "1xBet" ? handicapXBetOdds : handicapChineOdds;
        return { bkItemsTotal, bkItemsHandicap };
    };
    const getOddMore = (totalValue: number, typeBK: "1xBet" | "Chine") => {
        const { bkItemsHandicap, bkItemsTotal } = getOdd(typeBK);
        const items =
            type === "TOTAL"
                ? bkItemsTotal.TotalMore
                : bkItemsHandicap.HandicapFirst;
        const findItem = items.find(({ P }) => P === totalValue);
        return findItem?.C ?? "-";
    };
    const getOddLess = (totalValue: number, typeBK: "1xBet" | "Chine") => {
        const { bkItemsHandicap, bkItemsTotal } = getOdd(typeBK);
        const items =
            type === "TOTAL"
                ? bkItemsTotal.TotalLess
                : bkItemsHandicap.HandicapLast;
        const findItem = items.find(({ P }) => P === totalValue);
        return findItem?.C ?? "-";
    };

    return (
        <Container fluid className="p-0 d-flex flex-row overflow-auto">
            <Table striped bordered hover size="sm" variant="dark">
                <Thead type="more" event={type} />
                <Body
                    total={
                        type === "TOTAL"
                            ? totalEvents.TotalMore
                            : handicapEvents.HandicapLess
                    }
                    getOdd={getOddMore}
                />
            </Table>
            <Table striped bordered hover size="sm" variant="dark">
                <Thead type="less" event={type} />
                <Body
                    total={
                        type === "TOTAL"
                            ? totalEvents.TotalLess
                            : handicapEvents.HandicapMore
                    }
                    getOdd={getOddLess}
                />
            </Table>
        </Container>
    );
};
