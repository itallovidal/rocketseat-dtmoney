import * as Dialog from "@radix-ui/react-dialog";
import {ReactNode} from "react";
import * as Styles from './Modal.styled.ts'
import Input from "../Input/Input.tsx";
import {X} from "phosphor-react";
function Modal({trigger} : {trigger: ReactNode}) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {trigger}
            </Dialog.Trigger>

            <Dialog.Portal>
                <Styles.Overlay/>
                <Styles.Content>
                    <Styles.CloseButton> <X size={24}/> </Styles.CloseButton>

                    <form action="">
                        <h1>Nova Transação</h1>

                        <Input placeholder={'Descrição'}/>
                        <Input placeholder={'Preço'}/>
                        <Input placeholder={'Categoria'}/>

                        <Styles.WrapperTransferTypeButton>
                            <Input type={'radio'} name={'transferType'} id={'entrada'} labelName={'Entrada'}/>
                            <Input type={'radio'} name={'transferType'} id={'saida'} labelName={'Saída'}/>
                        </Styles.WrapperTransferTypeButton>

                        <Styles.SubmitButton> Adicionar </Styles.SubmitButton>
                    </form>

                </Styles.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default Modal;