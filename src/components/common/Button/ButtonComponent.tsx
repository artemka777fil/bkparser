import { FC } from "react";
import { Button } from "react-bootstrap";

interface IProps {
    text: string;
    handlerSubmit: () => void | Promise<void>;
}

export const ButtonComponent: FC<IProps> = ({ text, handlerSubmit }) => {
    return (
        <Button variant="primary" onClick={handlerSubmit} className="my-2">
            {text}
        </Button>
    );
};
