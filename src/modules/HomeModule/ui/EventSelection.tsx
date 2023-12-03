import { FC } from "react";
import { Container } from "react-bootstrap";
import { SelectContainer } from "./SelectContainer";
import { SportsType } from "../constants";
import { MatchType, TSelect, TSelectType } from "../../../types";

interface IProps {
    setSportType: (value: number) => void;
    matchsItems: MatchType[];
    setMatchsType: (value: number) => void;
}

export const EventSelection: FC<IProps> = ({
    setSportType,
    matchsItems,
    setMatchsType,
}) => {
    const items: Array<{
        type: TSelectType;
        options: TSelect<TSelectType>;
        header: string;
        onChange: (value: number) => void;
    }> = [
        {
            type: "sports",
            options: SportsType,
            onChange: setSportType,
            header: "Выберите вид спорта",
        },
        {
            type: "matchs",
            options: matchsItems,
            onChange: setMatchsType,
            header: "Выберите матч",
        },
    ];
    return (
        <Container fluid className="p-0">
            {items.map(({ type, options, onChange, header }) => (
                <SelectContainer
                    key={type}
                    type={type}
                    options={options}
                    onChange={onChange}
                    header={header}
                />
            ))}
        </Container>
    );
};
