import {CounterContext, useContext} from "@/context/CounterContext";
import {FaArrowUp, FaArrowDown} from "react-icons/fa"

const counterSettings: string[] = [
    "break length",
    "session length"
];

const Settings = (): JSX.Element => {
    const {counterInterval, setCounterInterval} = useContext(CounterContext);

    const increaseBreak = () => {
        setCounterInterval(...counterInterval )
    }
    return <div className="flex items-center justify-evenly text-center">
            <div>
            <h2 className="text-3xl font-[600] capitalize">break length</h2>
            <div className="flex items-center justify-center gap-x-3 text-2xl">
                <button type="button"><FaArrowUp /></button>
                <span>{}</span>
                <button type="button"><FaArrowDown /></button>
            </div>
        </div>
        <div>
            <h2 className="text-3xl font-[600] capitalize">session length</h2>
            <div className="flex items-center justify-center gap-x-3 text-2xl">
                <button type="button"><FaArrowUp /></button>
                <span>{}</span>
                <button type="button"><FaArrowDown /></button>
            </div>
        </div>
    </div>
}

export default Settings