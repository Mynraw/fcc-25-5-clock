import {CounterContext, useContext} from "@/context/CounterContext";
import {FaArrowUp, FaArrowDown} from "react-icons/fa"

const Settings = (): JSX.Element => {
    const {counterInterval, setCounterInterval} = useContext(CounterContext);



    const increaseBreak = () => {
        setCounterInterval({...counterInterval, breakLength: counterInterval.breakLength + 1});
    }

    const decreaseBreak = () => {
        setCounterInterval({...counterInterval, breakLength: counterInterval.breakLength - 1});
    }

    const increaseSession = () => {
        setCounterInterval({...counterInterval, countLength: counterInterval.countLength + 1});
    }

    const decreaseSession = () => {
        setCounterInterval({...counterInterval, countLength: counterInterval.countLength - 1});
    }


    return <div className="flex items-center justify-evenly text-center text-3xl">
            <div>
            <h2 className="text-3xl font-[600] capitalize">break length</h2>
            <div className="flex items-center justify-center gap-x-3">
                <button onClick={increaseBreak} type="button"><FaArrowUp /></button>
                <span>{counterInterval.breakLength}</span>
                <button onClick={decreaseBreak} type="button"><FaArrowDown /></button>
            </div>
        </div>
        <div>
            <h2 className="text-3xl font-[600] capitalize">session length</h2>
            <div className="flex items-center justify-center gap-x-3">
                <button onClick={increaseSession} type="button"><FaArrowUp /></button>
                <span>{counterInterval.countLength}</span>
                <button onClick={decreaseSession} type="button"><FaArrowDown /></button>
            </div>
        </div>
    </div>
}

export default Settings
