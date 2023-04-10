import {useEffect} from "react";
import {CounterContext, useContext} from "@/context/CounterContext";

const SessionCard = (): JSX.Element => {
    const {state, handleSession} = useContext(CounterContext);

     useEffect(() => {
         const intervalCountDown: NodeJS.Timer = setInterval((): void => {

             if (!state.isStopped && state.seconds > 0) {
                 handleSession();
             }
         }, 1000);

         if (state.seconds === 0) {
             clearInterval(intervalCountDown);
         }

         return () => clearInterval(intervalCountDown);
     }, [state.isStopped, state.seconds]);


    return <div className="border-2 border-white rounded-3xl p-5 text-center">
        <h3 className="capitalize text-2xl font-medium">session</h3>
        <span className="text-6xl">{state.timer}</span>
    </div>
}

export default SessionCard
