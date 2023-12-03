import { FC, useEffect } from "react";
import { Form } from "react-bootstrap";
import { TSelectType, TSelect } from "../../../types";

interface IProps {
    type: TSelectType;
    options: TSelect<TSelectType>;
    onChange: (value: number) => void;
}

export const SelectComponent: FC<IProps> = ({ type, options, onChange }) => {
    const getKey = (ID?: number, LI?: number, I?: number) => {
        if (type === "sports") return ID;
        if (type === "champs") return LI;
        return I;
    };
    const getText = (N?: string, L?: string, O1?: string, O2?: string) => {
        if (type === "sports") return N;
        if (type === "champs") return L;
        return `${O1} vs ${O2}`;
    };

    return (
        <Form.Select
            size="lg"
            onChange={(event) => {
                onChange(Number(event.target.value));
            }}
        >
            <option>NULL</option>
            {options?.map(({ ID, LI, I, N, L, O1, O2 }) => {
                return (
                    <option key={getKey(ID, LI, I)} value={getKey(ID, LI, I)}>
                        {getText(N, L, O1, O2)}
                    </option>
                );
            })}
        </Form.Select>
    );
};
