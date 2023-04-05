import {useState, useEffect} from "react";

const SessionCard = (): JSX.Element => {
    const [counterInterval, setCounterInterval] = useState({countLength: 25, breakLength: 5, seconds: 0, timerStopped: false});

    const handleInterval = (): void => {
        const timer: number = counterInterval.countLength * 60;
        setCounterInterval({...counterInterval, seconds: timer});
        console.log(Math.floor(timer / 60)+':'+('0'+Math.floor(timer % 60)).slice(-2));

// https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    }

    useEffect(() => {
        handleInterval();

        }, [])


    return <div className="border-2 border-white rounded-3xl p-5 text-center">
        <h3 className="capitalize text-2xl font-medium">session</h3>
        <span className="text-6xl">{counterInterval.seconds}</span>
    </div>
}

export default SessionCard
