import {useReducer} from "react";
import {counterReducer} from "@/reducer/counterReducer";
import {CounterContext} from "@/context/CounterContext";
import Header from "@/assets/Header";
import SessionCard from "@/assets/SessionCard";
import Settings from "@/assets/Settings";
import Controls from "@/assets/Controls";

const CounterClock = (): JSX.Element => {
    // Global states for Context API
    const [state, dispatch] = useReducer(counterReducer, {countLength: 25, breakLength: 5, seconds: 1500, timer: "25:00", isStopped: true, breaksTurn: false});

    const handlePause = (): void => {
        dispatch({type: 'PAUSE_SESSION'});
    }

    const handleReset = (): void => {
        state.isStopped && dispatch({type: 'RESET_SESSION'});
    }

    const increaseBreak = (): void => {
        state.isStopped && dispatch({type: "INCREASE_BREAK"});
    }

    const decreaseBreak = (): void => {
        state.isStopped && dispatch({type: "DECREASE_BREAK"});
    }

    const increaseSession = (): void => {
        state.isStopped && dispatch({type: "INCREASE_SESSION"});
    }

    const decreaseSession = (): void => {
        state.isStopped && dispatch({type: "DECREASE_SESSION"});
    }

    const handleSession = (): void => {
        dispatch({type: "START_SESSION"});
    }

    const convertToBreak = (): void => {
        dispatch({type: "BREAK_TURN"});
    }

    const data: any = {
        increaseBreak,
        decreaseBreak,
        increaseSession,
        decreaseSession,
        handlePause,
        handleReset,
        handleSession,
        convertToBreak,
        state
    }

    return <CounterContext.Provider value={data}>
        <div className="w-screen h-screen grid place-items-center">
        <div className="container mx-auto flex flex-col gap-y-10">
            <Header />
            <Settings />
            <SessionCard />
            <Controls />
        </div>
        </div>
    </CounterContext.Provider>
}

export default CounterClock
