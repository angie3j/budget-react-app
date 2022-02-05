import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";

import Transaction from './Transaction';

function Transactions() {

    const URL = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
        .get(`${URL}/transactions`)
        .then((response) =>{
            setTransactions(response.data)
        })
        .catch((error) => console.warn('catch'))
    }, [URL])

    const transactionsFile = transactions.map((transaction, id) => {
        return (
            <Transaction 
                transaction={transaction}
                id={id}
            />
           )}
    )

    return (
        
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Source</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>{ transactionsFile }</tbody>
            </table>
            {/* <h1>Budget Total: {"$" + amount.toFixed(2)}</h1> */}           
        </div> 
    );
};


export default Transactions;