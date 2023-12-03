import { FC } from "react";
import { Form } from "react-bootstrap";
import { UseFormReturn } from "react-hook-form";
import { AuthFormType } from "../../../types";

interface IProps {
    type: "email" | "password";
    placeholder: string;
    methods: UseFormReturn<AuthFormType>;
}

export const InputComponent: FC<IProps> = ({ placeholder, methods, type }) => {
    return (
        <Form.Control
            placeholder={placeholder}
            {...methods.register(type)}
            className="my-4"
        />
    );
};
