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

     // const handleInterval = (): void => {
     //     // Convert the current time in minutes to seconds
     //     const seconds: number = state.countLength * 60;
     //     // Then format it like MM:SS
     //     const timer: string = Math.floor(seconds / 60) + ':' + ('0' + Math.floor(seconds % 60)).slice(-2);
     //     // it's a new state now
     //     setCounterInterval({...state, seconds: seconds, timer: timer});
     // }

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
        <Header />
        <Settings />
        <SessionCard />
        <Controls />
    </CounterContext.Provider>
}

export default CounterClock
