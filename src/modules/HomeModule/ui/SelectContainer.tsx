import { FC } from "react";
import { Container, Form } from "react-bootstrap";
import { TSelect, TSelectType } from "../../../types";
import { Common } from "../../../components";

interface IProps {
    type: TSelectType;
    header: string;
    onChange: (value: number) => void;
    options: TSelect<TSelectType>;
}

export const SelectContainer: FC<IProps> = ({
    type,
    header,
    options,
    onChange,
}) => {
    const { SelectComponent } = Common;
    return (
        <Container fluid className="d-flex align-items-center m-2 p-0">
            <Form.Text>{header}</Form.Text>
            <SelectComponent
                type={type}
                options={options}
                onChange={onChange}
            />
        </Container>
    );
};
