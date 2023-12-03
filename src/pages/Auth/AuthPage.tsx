import { FC } from "react";
import { AuthLayout } from "../../layouts";
import { AuthModule } from "../../modules";

export const AuthPage: FC = () => {
    return (
        <AuthLayout>
            <AuthModule />
        </AuthLayout>
    );
};
