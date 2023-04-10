import {CounterContext, useContext} from "@/context/CounterContext";
import {FaPlay, FaPause} from "react-icons/fa"
import {FiRefreshCw} from "react-icons/fi"

const Controls = (): JSX.Element => {
    const {handleReset, handlePause, state} = useContext(CounterContext);

    return <div className="text-4xl text-center py-8 flex items-center justify-center">
       <button className="mx-2" onClick={handlePause}> {state.isStopped ? <FaPlay /> : <FaPause />}</button>
        <span className="mx-2 border-l-2 border-white h-[20px]"></span>
        <button onClick={handleReset} className="ml-2"><FiRefreshCw /></button>
    </div>
}

export default Controls
