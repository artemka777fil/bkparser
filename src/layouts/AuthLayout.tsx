import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";

interface IProps {
    children: ReactElement;
}

export const AuthLayout: FC<IProps> = ({ children }) => {
    return (
        <Container fluid className="vh-100 p-0">
            {children}
        </Container>
    );
};
