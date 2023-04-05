import {Context, createContext, useContext} from "react";

const CounterContext: Context<any> = createContext(null);

export {
    CounterContext,
    useContext,
}
