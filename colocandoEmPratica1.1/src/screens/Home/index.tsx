import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { ButtonStyles, ContainerButtons, ContainerHome, ContainerInputs } from "./styles";


export function Home() {
    const [totalTextValue, setTotalTextValue] = useState('')
    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setsecondValue] = useState('')

    function Calculate(e: MouseEvent<HTMLButtonElement>) {
        const operationType = e.currentTarget.textContent
        let total
        switch (operationType) {
            case '+':
                total = (Number(firstValue) + Number(secondValue))
                break;

            case '-':
                total =(Number(firstValue) - Number(secondValue))
            break;

            case '/':
                total =(Number(firstValue) / Number(secondValue))
            break;

            case 'x':
                total =(Number(firstValue) * Number(secondValue))
            break;
        }
        setTotalTextValue(String(total))
    }


    return (
        <ContainerHome>
            <h1>Calculadora</h1>
            <ContainerInputs>
                <input value={firstValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstValue(e.target.value)} type="text" />
                <input value={secondValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setsecondValue(e.target.value)} type="text" />
            </ContainerInputs>

            <ContainerButtons>
                <div>
                    <ButtonStyles onClick={Calculate}>+</ButtonStyles>
                    <ButtonStyles onClick={Calculate}>-</ButtonStyles>
                </div>

                <div>
                    <ButtonStyles onClick={Calculate}>x</ButtonStyles>
                    <ButtonStyles onClick={Calculate}>÷</ButtonStyles>
                </div>

            </ContainerButtons>

            <h2>{totalTextValue}</h2>
        </ContainerHome>
    )
}