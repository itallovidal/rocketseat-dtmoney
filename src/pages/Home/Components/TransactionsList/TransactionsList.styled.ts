import styled from "styled-components";
import {Button, InputBase} from "../../Home.styled.ts";
import {darkTheme} from "../../../../styles/theme.ts";

export const SearchWrapper = styled.section`
  display: flex;
  width: 100%;
  gap: 1rem;
`

export const SearchButton = styled(Button)`
  display: flex;
  gap: .5rem;
  align-items: center;
  background: transparent;
  color: ${({theme})=> theme['green-300']};
  //font-weight: bold;
  
  svg{
    font-size: 1rem;
  }
`

export const Input = styled(InputBase)``


export const TransactionTableWrapper = styled.section`
  margin-top: 2rem;
  table{
    width: 100%;
  }
  
  table tbody {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
  }

  table tbody tr{
    background: ${({theme})=> theme['gray-700']};
    padding: 1.5rem 1.25rem;
    display: flex;
    gap: .5rem;
    border-radius: 6px;
  }

  table tbody tr td:nth-child(1){
    flex: 5;
  }

  table tbody tr td:nth-child(2){
    flex: 3;
    text-transform: uppercase;
  }

  table tbody tr td:nth-child(3){
    flex: 3;
  }

  table tbody tr td:nth-child(4){
    flex: 1;
  }
`

interface TransactionTypeProps{
    transactionType: 'income' | 'outcome'
}

const TransactionTypeColors={
    'income': darkTheme['green-300'],
    'outcome': darkTheme['red-300']
} as const
export const TransactionType = styled.span<TransactionTypeProps>`
  color: ${({transactionType})=> TransactionTypeColors[transactionType]} ;
  
`