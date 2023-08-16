import * as Styles from "./TransactionsList.styled.ts";
import {MagnifyingGlass} from "phosphor-react";
import {GlobalWrapper} from "../../Home.styled.ts";
import {Input} from "./TransactionsList.styled.ts";

function TransactionsList() {
    return (
        <>
            <GlobalWrapper>
                <Styles.SearchWrapper>
                    <Input type="text" placeholder={'Busque por transações'}/>

                    <Styles.SearchButton>
                        <MagnifyingGlass size={16} weight={'bold'}/> Buscar
                    </Styles.SearchButton>
                </Styles.SearchWrapper>
            </GlobalWrapper>

            <GlobalWrapper>
                <Styles.TransactionTableWrapper>
                    <table>
                        <tbody>
                        <tr>
                            <td>Desenvolvimento de Site</td>
                            <td>
                                <Styles.TransactionType transactionType={'outcome'}>r$ 12.000,00</Styles.TransactionType>
                            </td>
                            <td>transacao</td> <td>10/10/2022</td>
                        </tr>

                        <tr>
                            <td>Desenvolvimento de Site</td>
                            <td>
                                <Styles.TransactionType transactionType={'income'}>r$ 12.000,00</Styles.TransactionType>
                            </td>
                            <td>transacao</td> <td>10/10/2022</td>
                        </tr>
                        </tbody>
                    </table>
                </Styles.TransactionTableWrapper>
            </GlobalWrapper>
        </>
    );
}

export default TransactionsList;