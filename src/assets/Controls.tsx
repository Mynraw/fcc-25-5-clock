import {useEffect} from "react";
import {CounterContext, useContext} from "@/context/CounterContext";
import {FaPlay, FaPause} from "react-icons/fa"
import {FiRefreshCw} from "react-icons/fi"

const Controls = (): JSX.Element => {
    const {counterInterval, setCounterInterval} = useContext(CounterContext);


    // const goInterval:NodeJS.Timer = setInterval(():void => {
    //     if (counterInterval.seconds > 0) {
    //         setCounterInterval({...counterInterval, seconds: (counterInterval.seconds - 1)});
    //     } else {
    //         clearInterval(goInterval);
    //     }
    //
    // }, 1000)

    // return (): void=> {
    //     clearInterval(goInterval);
    // };

    // useEffect(() => {
    //     handleInterval();
    // }, [counterInterval.countLength]);

    const startSession = (): void => {
        setCounterInterval({...counterInterval, isStopped: false});
    }

    const pauseSession = (): void => {
        setCounterInterval({...counterInterval, isStopped: true});
    }

    const resetSession = (): void => {
        setCounterInterval({...counterInterval, countLength: 25, breakLength: 5});
    }

    return <div className="text-4xl text-center py-8 flex items-center justify-center">
        <button onClick={startSession}><FaPlay /></button>
        <button onClick={pauseSession} className="mx-2"><FaPause /></button>
        <span className="mx-2 border-l-2 border-white h-[20px]"></span>
        <button onClick={resetSession} className="ml-2"><FiRefreshCw /></button>
    </div>
}

export default Controls
