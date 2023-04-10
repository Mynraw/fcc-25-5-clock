import {useReducer, useState} from "react";
import {CounterContext} from "@/context/CounterContext";
import Header from "@/assets/Header";
import SessionCard from "@/assets/SessionCard";
import Settings from "@/assets/Settings";
import Controls from "@/assets/Controls";
import {counterReducer} from "@/reducer/counterReducer";

const CounterClock = (): JSX.Element => {
    // Global states for Context API
    const [counterInterval, setCounterInterval] = useState({countLength: 25, breakLength: 5, seconds: 1500, timer: "25:00", isStopped: true});
    const [state, dispatch] = useReducer(counterReducer, counterInterval);

    const increaseBreak = () => {
        counterInterval.isStopped && dispatch({type: "INCREASE_BREAK"});
    }

    const decreaseBreak = () => {
        counterInterval.isStopped && dispatch({type: "DECREASE_BREAK"});
    }

    const increaseSession = () => {
        counterInterval.isStopped && dispatch({type: "INCREASE_SESSION"});
    }

    const decreaseSession = () => {
        counterInterval.isStopped && dispatch({type: "DECREASE_SESSION"});
    }
    const data: any = {
        counterInterval,
        setCounterInterval,
        increaseBreak,
        decreaseBreak,
        increaseSession,
        decreaseSession,
        state
    }

    return <CounterContext.Provider value={data}>
        <Header />
        <Settings />
        <SessionCard />
        <Controls />
    </CounterContext.Provider>
}

export default CounterClock
