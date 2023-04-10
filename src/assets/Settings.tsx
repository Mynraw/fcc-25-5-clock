import {CounterContext, useContext} from "@/context/CounterContext";
import {FaArrowUp, FaArrowDown} from "react-icons/fa"

const Settings = (): JSX.Element => {
    const {increaseBreak, decreaseBreak, increaseSession, decreaseSession, state} = useContext(CounterContext);


    return <div className="flex items-center justify-evenly text-center text-3xl">
            <div>
            <h2 className="text-3xl font-[600] capitalize">break length</h2>
            <div className="flex items-center justify-center gap-x-3">
                <button onClick={increaseBreak} type="button"><FaArrowUp /></button>
                <span>{state.breakLength}</span>
                <button onClick={decreaseBreak} type="button"><FaArrowDown /></button>
            </div>
        </div>
        <div>
            <h2 className="text-3xl font-[600] capitalize">session length</h2>
            <div className="flex items-center justify-center gap-x-3">
                <button onClick={increaseSession} type="button"><FaArrowUp /></button>
                    <span>{state.countLength}</span>
                <button onClick={decreaseSession} type="button"><FaArrowDown /></button>
            </div>
        </div>
    </div>
}

export default Settings
