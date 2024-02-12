import { inputFieldInterface } from "./interface"

export const InputField: React.FC<inputFieldInterface> = ({
    title, placeholder, data, setData, name
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold text-xs text-white">{title}</label>
            <input type="text" name={name} className="bg-white rounded-md p-5 text-xs w-full lg:w-[20rem] shadow-sm" placeholder={placeholder} 
            value={data[title]} onChange={(e) => {
                setData({
                    ...data,
                    [title]: e.target.value
                })
            }}/>
        </div>
    )
}