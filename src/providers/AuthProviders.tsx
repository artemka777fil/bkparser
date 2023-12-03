import {
    PropsWithChildren,
    createContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { signIn, logout, auth } from "../firebase";
import { UserType } from "../types";

interface IContext {
    isLoading: boolean;
    signInFunction: (params: UserType) => Promise<void>;
    signOutFunction: () => Promise<void>;
    isAuth: boolean;
}

export const AuthContext = createContext({} as IContext);

export const AuthProviders = ({ children }: PropsWithChildren) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    const signInFunction = async (params: UserType) => {
        setIsLoading(true);
        try {
            await signIn(params);
        } catch (error: any) {
            console.log("error signInFunction", error);
        } finally {
            setIsLoading(false);
        }
    };

    const signOutFunction = async () => {
        setIsLoading(true);
        try {
            await logout();
        } catch (error: any) {
            console.log("error signOutFunction", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsAuth(!!user);
            setIsLoadingInitial(false);
        });
    }, []);

    const value = useMemo(
        () => ({
            isLoading: isLoading || isLoadingInitial,
            signInFunction,
            signOutFunction,
            isAuth,
        }),
        [isLoading, isAuth, isLoadingInitial],
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
