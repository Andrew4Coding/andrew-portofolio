import { inputFieldInterface } from "./interface"

export const InputField: React.FC<inputFieldInterface> = ({
    title, placeholder, data, setData
}) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-sm">{title}</h1>
            <input type="text" className="bg-white p-5 text-xs w-full lg:w-[20rem] shadow-sm" placeholder={placeholder} 
            value={data[title]} onChange={(e) => {
                setData({
                    ...data,
                    [title]: e.target.value
                })
            }}/>
        </div>
    )
}