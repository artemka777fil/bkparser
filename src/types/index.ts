import { ChangeEvent } from "react";

export type UserType = {
    email: string;
    password: string;
};

export type AuthFormType = {
    email: string;
    password: string;
    onSubmit: (value: ChangeEvent<HTMLInputElement>) => void;
};

export type TSelectType = "sports" | "champs" | "matchs";

export type TEventType = 1 | 2 | 38 | 939 | 940;

export type TSelect<T extends TSelectType> = T extends "sports"
    ? SportsType[]
    : T extends "champs"
    ? ChampType[]
    : T extends "matchs"
    ? MatchType[]
    : [];

export type SportsType = {
    L?: string;
    LI?: number;
    SC?: ChampType[];
    I?: number;
    O1?: string;
    O2?: string;

    ID: number;
    N: string;
};

export type ChampType = {
    ID?: number;
    N?: string;
    I?: number;
    O1?: string;
    O2?: string;

    LI: number;
    L: string;
    SC?: ChampType[];
};

export type MatchType = {
    ID?: number;
    N?: string;
    L?: string;
    LI?: number;
    SC?: any;

    I: number;
    O1: string;
    O2: string;
};

export interface OddsType {
    GE: Ge[];
}
export interface Ge {
    E: E[][];
    G: number;
}

export interface E {
    C: number;
    G: number;
    T: number;
    P?: number;
    CE?: number;
}
