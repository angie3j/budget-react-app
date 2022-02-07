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
                key={id}
                setTransactions={setTransactions}
            />
           )}
    )

    return (
        
        <div className="container">
            <section>
                <br />
                <br />
            <fieldset>
                <br />
                <legend>TRANSACTIONS</legend>
            <table>
                <thead>
                    <tr> 
                        <th>DATE</th>
                        <th>SOURCE</th>
                        <th>AMOUNT</th>
                    </tr>
               </thead>
                <tbody>{ transactionsFile }</tbody>
            
            </table>
            {/* <h1>Budget Total: {"$" + amount.toFixed(2)}</h1> */}           
            </fieldset>
            </section>
        </div> 
    );
};


export default Transactions;