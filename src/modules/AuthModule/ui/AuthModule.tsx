import { FC } from "react";
import { Common } from "../../../components";
import { Container } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthFormType } from "../../../types";
import { AuthForm } from "./AuthForm";
import { useAuth } from "../../../hooks";

export const AuthModule: FC = () => {
    const { ButtonComponent } = Common;
    const { signInFunction } = useAuth();
    const { ...methods } = useForm<AuthFormType>({
        mode: "onSubmit",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { handleSubmit } = methods;
    const onSubmit: SubmitHandler<AuthFormType> = async ({
        onSubmit,
        ...fields
    }) => signInFunction(fields);

    return (
        <Container fluid className="h-100 overflow-auto">
            <AuthForm methods={methods} />
            <ButtonComponent
                text="Войти"
                handlerSubmit={handleSubmit(onSubmit)}
            />
        </Container>
    );
};
