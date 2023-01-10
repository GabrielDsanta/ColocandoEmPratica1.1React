import { ChangeEvent, useState } from "react"
import { ContainerInputNumber } from "./styles"

interface InputNumberProps {
    value: string
    functionOnChange: (e: ChangeEvent<HTMLInputElement>) => void
    setValue: (value: string) => void

}

export function InputNumber({ value, functionOnChange, setValue }: InputNumberProps) {
    const [isBoxAlertOpen, setIsBoxAlertOpen] = useState(false)

    return (
        <ContainerInputNumber onMouseLeave={() => setIsBoxAlertOpen(false)} onMouseOver={() => setIsBoxAlertOpen(true)}>
            <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                value={value}
                type="text"
            />

            {isBoxAlertOpen && (
                <span>Value is required</span>
            )}
        </ContainerInputNumber>
    )
}