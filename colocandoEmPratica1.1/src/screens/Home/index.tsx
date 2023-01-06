import { ChangeEvent, MouseEvent, useState } from "react";
import { ItemTotal } from "../../components/ItemTotal";
import { ButtonStyles, ContainerButtons, ContainerHome, ContainerInputs } from "./styles";


export function Home() {
    const [totalTextValue, setTotalTextValue] = useState(0)
    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setsecondValue] = useState('')
    const [totalList, setTotalList] = useState<number[]>([])

    function Calculate(e: MouseEvent<HTMLButtonElement>) {
        const operationType = e.currentTarget.textContent
        let total = 0
        switch (operationType) {
            case '+':
                total = (Number(firstValue) + Number(secondValue))
                break;

            case '-':
                total =(Number(firstValue) - Number(secondValue))
            break;

            case '÷':
                total =(Number(firstValue) / Number(secondValue))
            break;

            case 'x':
                total =(Number(firstValue) * Number(secondValue))
            break;
        }

        ResetAndSetValues(total)
    }

    function ResetAndSetValues(total: number){
        setFirstValue('')
        setsecondValue('')
        setTotalTextValue(total)
        setTotalList((state) => [...state, total])
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

            <h3>Lista De Resultados</h3>

            {totalList.map((item) => {
                return <ItemTotal key={item + totalList.length} total={item} />
            })}
        </ContainerHome>
    )
}