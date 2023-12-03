import { FC } from "react";
import { AuthLayout } from "../../layouts";
import { HomeModule } from "../../modules/HomeModule";

export const HomePage: FC = () => {
    return (
        <AuthLayout>
            <HomeModule />
        </AuthLayout>
    );
};
