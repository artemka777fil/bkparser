import { FC } from "react";
import { Accordion } from "react-bootstrap";
import { TotalTables } from "../../tables/total/TotalTables";

interface IProps {
    type: "TOTAL" | "HANDICAP";
}

export const TotalContainer: FC<IProps> = ({ type }) => {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    {type === "TOTAL" ? "Тотал" : "Фора"}
                </Accordion.Header>
                <Accordion.Body>
                    <TotalTables type={type} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};
