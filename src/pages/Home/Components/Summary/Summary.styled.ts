import styled from "styled-components";

export const Summary = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  transform: translateY(-50%);

  div:nth-child(1) svg{
    color: ${({theme})=> theme['green-300']};
  }

  div:nth-child(2) svg{
    color: ${({theme})=> theme['red-300']};
  }

  div:nth-child(3) svg{
    color: white;
  }
`

interface SummaryCardProps{
    $isGreen?: boolean
}
export const SummaryCard = styled.div<SummaryCardProps>`
  background: blue;
  flex: 1;
  padding: 2rem;
  border-radius: 6px;
  background: ${({theme, $isGreen })=> $isGreen ? theme['green-500'] : theme['gray-600'] };
  color: white;
  
  span{
    font-size: 2rem;
    text-transform: uppercase;
  }
  
  div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`