import {useReducer, useState} from "react";
import {counterReducer} from "@/reducer/counterReducer";
import {CounterContext} from "@/context/CounterContext";
import Header from "@/assets/Header";
import SessionCard from "@/assets/SessionCard";
import Settings from "@/assets/Settings";
import Controls from "@/assets/Controls";

const CounterClock = (): JSX.Element => {
    // Global states for Context API
    const [counterInterval, setCounterInterval] = useState({countLength: 25, breakLength: 5, seconds: 1500, timer: "25:00", isStopped: true});
    const [state, dispatch] = useReducer(counterReducer, counterInterval);

    const handlePause = () => {
        dispatch({type: 'PAUSE_SESSION'});
    }

    const handleReset = () => {
        state.isStopped && dispatch({type: 'RESET_SESSION'});
    }

    const increaseBreak = () => {
        state.isStopped && dispatch({type: "INCREASE_BREAK"});
    }

    const decreaseBreak = () => {
        state.isStopped && dispatch({type: "DECREASE_BREAK"});
    }

    const increaseSession = () => {
        state.isStopped && dispatch({type: "INCREASE_SESSION"});
    }

    const decreaseSession = () => {
        state.isStopped && dispatch({type: "DECREASE_SESSION"});
    }

    const handleSession = () => {
        dispatch({type: "START_SESSION"});
    }

    const data: any = {
        increaseBreak,
        decreaseBreak,
        increaseSession,
        decreaseSession,
        handlePause,
        handleReset,
        handleSession,
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
