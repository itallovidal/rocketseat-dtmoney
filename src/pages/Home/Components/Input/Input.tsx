import * as Styles from './Input.styled.ts'
import {HTMLProps} from "react";
import {ArrowCircleDown, ArrowCircleUp} from "phosphor-react";

interface InpuptProps extends HTMLProps<HTMLInputElement>{
    labelName?: 'Entrada' | 'Saída'
}
function Input({labelName, ...props} :InpuptProps) {

    if(props.type === 'radio' && labelName){
        return (
            <Styles.TransferTypeWrapper Transfertype={labelName}>
                <Styles.Input $isHidden
                              type={'radio'}
                              name={props.name}
                              id={props.id}
                              placeholder={props.placeholder}/>

                <Styles.TransferName Transfertype={labelName} htmlFor={props.id}>
                    {labelName === 'Saída'
                        ? <ArrowCircleDown size={24} />
                        : <ArrowCircleUp size={24}/>}
                     {labelName}
                </Styles.TransferName>
                {/*<Styles.Error>Ops! <span> Preencha novamente!</span></Styles.Error>*/}
            </Styles.TransferTypeWrapper>
        );
    }

    return (
        <Styles.Wrapper>
            <Styles.Input
                placeholder={props.placeholder}/>
            {/*<Styles.Error>Ops! <span> Preencha novamente!</span></Styles.Error>*/}
        </Styles.Wrapper>
    );
}

export default Input;