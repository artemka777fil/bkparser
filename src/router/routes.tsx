import { ReactElement, useEffect } from "react";
import { Route, Routes as Switch, useNavigate } from "react-router-dom";
import { pathes } from "./pathes";
import { HomePage, AuthPage } from "../pages";
import { useAuth } from "../hooks";

export const Routes = (): ReactElement => {
    const { isAuth, isLoading } = useAuth();
    const navigation = useNavigate();

    useEffect(() => {
        if (isLoading) return navigation("/bkparser");
        if (!isAuth) return navigation("/bkparser/auth");
        return navigation("/bkparser/home");
    }, [isAuth, navigation, isLoading]);

    return (
        <Switch>
            <Route path={pathes.SPLASH} element={<div>Загрузка...</div>} />
            <Route path={pathes.HOME} element={<HomePage />} />
            <Route path={pathes.AUTH} element={<AuthPage />} />
        </Switch>
    );
};
