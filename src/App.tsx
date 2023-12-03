import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Routes } from "./router";
import { AuthProviders } from "./providers";
import { setupStore } from "./store";

const store = setupStore();

export const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AuthProviders>
                    <Routes></Routes>
                </AuthProviders>
            </BrowserRouter>
        </Provider>
    );
};
