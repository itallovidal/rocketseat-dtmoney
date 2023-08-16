import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import {Button} from "../../Home.styled.ts";

export const Overlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.50);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  width: 95%;
  max-width: 30rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50% );
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 6px;
  padding: 2rem;
  background: ${({theme})=> theme['gray-800']};
  
  form{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  
  h1{
    color: white;
    margin-block: .5rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  width: fit-content;
  padding: .7rem;
  border: none;
  background: none;
  color: white;
  align-self: flex-end;
  cursor: pointer;
  line-height: 0;
  
  &:focus{
    outline: 1px solid ${({theme})=> theme['green-300']};
    border-radius: 50%;
  }
`

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1.2rem;
  padding: 1.2rem;
`
export const WrapperTransferTypeButton = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`