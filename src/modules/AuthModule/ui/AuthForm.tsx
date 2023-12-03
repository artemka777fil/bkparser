import { FC } from "react";
import { Common } from "../../../components";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { AuthFormType } from "../../../types";

interface IProps {
    methods: UseFormReturn<AuthFormType>;
}

export const AuthForm: FC<IProps> = ({ methods }) => {
    const { InputComponent } = Common;
    return (
        <FormProvider {...methods}>
            <InputComponent
                placeholder="Введите email"
                methods={methods}
                type="email"
            />
            <InputComponent
                placeholder="Введите password"
                methods={methods}
                type="password"
            />
        </FormProvider>
    );
};
