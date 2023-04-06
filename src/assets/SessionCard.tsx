import {useEffect} from "react";
import {CounterContext, useContext} from "@/context/CounterContext";

const SessionCard = (): JSX.Element => {
    const {counterInterval, setCounterInterval} = useContext(CounterContext);

    let timer: string = "25:00";

    const handleInterval = (): void => {
        // Convert the current time in minutes to seconds
        const seconds = counterInterval.countLength * 60;
        // Then format it like MM:SS
        timer = Math.floor(seconds / 60) + ':' + ('0' + Math.floor(seconds % 60)).slice(-2);
        // it's a state now
        setCounterInterval({...counterInterval, seconds: seconds});

        console.log("worked?")
    }

    useEffect(() => {
        handleInterval();
        const intervalCountDown: NodeJS.Timer = setInterval((): void => {

            if (!counterInterval.isStopped && counterInterval.seconds > 0) {
                setCounterInterval({...counterInterval, seconds: counterInterval.seconds - 1});
            }
        }, 1000);

        if (counterInterval.seconds === 0) {
            clearInterval(intervalCountDown);
        }

        return () => clearInterval(intervalCountDown);
    }, [counterInterval.isStopped, counterInterval.seconds, counterInterval.countLength, timer]);


    return <div className="border-2 border-white rounded-3xl p-5 text-center">
        <h3 className="capitalize text-2xl font-medium">session</h3>
        <span className="text-6xl">{timer}</span>
    </div>
}

export default SessionCard
