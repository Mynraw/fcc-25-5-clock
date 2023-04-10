import {useEffect} from "react";
import {CounterContext, useContext} from "@/context/CounterContext";

const SessionCard = (): JSX.Element => {
    const {state, setCounterInterval} = useContext(CounterContext);

    // const handleInterval = (): void => {
    //     // Convert the current time in minutes to seconds
    //     const seconds: number = state.countLength * 60;
    //     // Then format it like MM:SS
    //     const timer: string = Math.floor(seconds / 60) + ':' + ('0' + Math.floor(seconds % 60)).slice(-2);
    //     // it's a state now
    //     setCounterInterval({...state, seconds: seconds});
    // }
    //
    // useEffect(() => {
    //     handleInterval();
    //     const intervalCountDown: NodeJS.Timer = setInterval((): void => {
    //
    //         if (!state.isStopped && state.seconds > 0) {
    //             setCounterInterval({...state, seconds: state.seconds - 1});
    //         }
    //     }, 1000);
    //
    //     if (state.seconds === 0) {
    //         clearInterval(intervalCountDown);
    //     }
    //
    //     return () => clearInterval(intervalCountDown);
    // }, [state.isStopped, state.seconds, state.countLength]);


    return <div className="border-2 border-white rounded-3xl p-5 text-center">
        <h3 className="capitalize text-2xl font-medium">session</h3>
        <span className="text-6xl">{state.timer}</span>
    </div>
}

export default SessionCard
