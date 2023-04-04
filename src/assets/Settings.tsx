import {FaArrowUp, FaArrowDown} from "react-icons/fa"

const counterSettings: string[] = [
    "break length",
    "session length"
];

const Settings = (): JSX.Element => {
    return <div className="flex items-center justify-evenly text-center">
        {counterSettings.map((setting: string, index: number) =>
            <div key={index}>
            <h2 className="text-3xl font-[600] capitalize">{setting}</h2>
            <div className="flex items-center justify-center gap-x-3 text-2xl">
                <button type="button"><FaArrowUp /></button>
                <span>{index}</span>
                <button type="button"><FaArrowDown /></button>
            </div>
        </div>)}
    </div>
}

export default Settings