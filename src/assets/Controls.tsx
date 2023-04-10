import {CounterContext, useContext} from "@/context/CounterContext";
import {FaPlay, FaPause} from "react-icons/fa"
import {FiRefreshCw} from "react-icons/fi"

const Controls = (): JSX.Element => {
    const {counterInterval, setCounterInterval} = useContext(CounterContext);

    const startSession = (): void => {
        setCounterInterval({...counterInterval, isStopped: false});
    }

    const pauseSession = (): void => {
        setCounterInterval({...counterInterval, isStopped: true});
    }

    const resetSession = (): void => {
        setCounterInterval({...counterInterval, countLength: 25, breakLength: 5, isStopped: true});
    }

    return <div className="text-4xl text-center py-8 flex items-center justify-center">
        <button onClick={startSession}><FaPlay /></button>
        <button onClick={pauseSession} className="mx-2"><FaPause /></button>
        <span className="mx-2 border-l-2 border-white h-[20px]"></span>
        <button onClick={resetSession} className="ml-2"><FiRefreshCw /></button>
    </div>
}

export default Controls
