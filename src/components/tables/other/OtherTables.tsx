import { FC } from "react";
import { Container, Table } from "react-bootstrap";
import { TEventType } from "../../../types";
import { useAppSelector } from "../../../hooks/useRedux";
import { OddThContainer } from "../../common";

interface IProps {
    type: TEventType;
}

export const OtherTables: FC<IProps> = ({ type }) => {
    const otherOddsXBet = useAppSelector(
        (state) => state["1xBetOtherOdds"],
    ).odds.find((el) => el.G === type);

    const otherOddsChine = useAppSelector(
        (state) => state.IPCOtherOdds,
    ).odds.find((el) => el.G === type);

    const getHeader = () => {
        switch (type) {
            case 1:
                return ["П1", "Х", "П2"];
            case 2:
                return ["1X", "Х", "2X"];
            case 38:
                return ["П1", "П2"];
            case 940:
                return ["1X", "12", "2X"];
            case 939:
                return ["П1", "Х", "П2"];
            default:
                return [];
        }
    };

    return (
        <Container fluid className="p-0 d-flex flex-row overflow-auto">
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        {getHeader().map((el) => (
                            <th key={el} className="text-center">
                                {el}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="text-center">1xBet</th>
                        {otherOddsXBet?.E.map((el) =>
                            el.map((e) => (
                                <OddThContainer key={e.C} value={e.C} />
                            )),
                        )}
                    </tr>
                    <tr>
                        <th className="text-center">FBTY</th>
                        {otherOddsChine?.E?.map((el) =>
                            el.map((e) => (
                                <OddThContainer key={e.C} value={e.C} />
                            )),
                        )}
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
