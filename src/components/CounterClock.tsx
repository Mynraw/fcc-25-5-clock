import {useState} from "react";
import {CounterContext} from "@/context/CounterContext";
import Header from "@/assets/Header";
import SessionCard from "@/assets/SessionCard";
import Settings from "@/assets/Settings";
import Controls from "@/assets/Controls";

const CounterClock = (): JSX.Element => {
    // Global states for Context API
    const [counterInterval, setCounterInterval] = useState({countLength: 25, breakLength: 5, seconds: 1500, timer: "", isStopped: true});

    const data: any = {
        counterInterval,
        setCounterInterval
    }

    return <CounterContext.Provider value={data}>
        <Header />
        <Settings />
        <SessionCard />
        <Controls />
    </CounterContext.Provider>
}

export default CounterClock
