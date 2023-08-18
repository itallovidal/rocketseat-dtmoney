import {Api} from "../lib/axios.ts";

export type TransactionType = 'income' | 'outcome'

export interface Transaction{
    "id": number,
    "description": string,
    "type": TransactionType
    "category": string,
    "price": number,
    "createdAt": string
}

export async function getTransations(query: null | string = null ) : Promise<Transaction[]>{
    const response = await Api.get('transactions',{
        params:{
            q: query,
            _order: 'desc',
            _sort: 'createdAt'
        },
    })
    return await response.data
}

export const MoneyFormatter = new Intl.NumberFormat("BR", {
    currency: "BRL",
    style: "currency"
})

export const DateFormatter = new Intl.DateTimeFormat("BR")