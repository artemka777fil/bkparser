import { FC } from "react";
import { Accordion } from "react-bootstrap";
import { OtherTables } from "../../tables/other/OtherTables";
import { TEventType } from "../../../types";

interface IProps {
    type: TEventType;
}

export const OtherContainer: FC<IProps> = ({ type }) => {
    const getHeader = () => {
        switch (type) {
            case 1:
                return "1X2";
            case 2:
                return "Двойной шанс";
            case 38:
                return "Победа в матче";
            case 939:
                return "1х2 на основное время";
            case 940:
                return "Двойной шанс на основное время";
            default:
                return "";
        }
    };

    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{getHeader()}</Accordion.Header>
                <Accordion.Body>
                    <OtherTables type={type} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};
