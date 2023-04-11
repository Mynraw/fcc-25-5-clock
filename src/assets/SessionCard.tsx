import {useEffect} from "react";
import {CounterContext, useContext} from "@/context/CounterContext";

const SessionCard = (): JSX.Element => {
    const {state, handleSession, convertToBreak} = useContext(CounterContext);

     useEffect(() => {
         const intervalCountDown: NodeJS.Timer = setInterval((): void => {

             if (!state.isStopped && state.seconds > 0) {
                 handleSession();
             }
         }, 1000);

         if (state.seconds === 0) {
             clearInterval(intervalCountDown);
             alert("Your session has ended. Take a break now!");
             convertToBreak();
         }

         return () => clearInterval(intervalCountDown);
     }, [state.isStopped, state.seconds, state.timer]);


    return <div className="border-2 border-white rounded-3xl p-5 text-center w-[220px] mx-auto">
        <h3 className="capitalize text-2xl font-medium">{!state.breaksTurn ? "session" : "break"}</h3>
        <span className="text-6xl">{state.timer}</span>
    </div>
}

export default SessionCard
