import {useState, useEffect} from "react";

const SessionCard = (): JSX.Element => {
    const [counterInterval, setCounterInterval] = useState({countLength: 25, seconds: 1500, timer: ""});

    const handleInterval = (): void => {
        // Convert the current time in minutes to seconds
        // Then format it like MM:SS
        const formattedVal: string = Math.floor(counterInterval.seconds / 60) + ':' + ('0' + Math.floor(counterInterval.seconds % 60)).slice(-2);
        // it's a state now
        setCounterInterval({...counterInterval, timer: formattedVal});
    }

    useEffect(() => {
        handleInterval();
        const goInterval = setInterval(() => {
            if (counterInterval.seconds > 0) {
                setCounterInterval({...counterInterval, seconds: (counterInterval.seconds - 1)});
            } else {
                clearInterval(goInterval);
            }

        }, 1000)
        return (): void=> {
            clearInterval(goInterval);
        };
        }, [counterInterval.seconds])


    return <div className="border-2 border-white rounded-3xl p-5 text-center">
        <h3 className="capitalize text-2xl font-medium">session</h3>
        <span className="text-6xl">{counterInterval.timer}</span>
    </div>
}

export default SessionCard
