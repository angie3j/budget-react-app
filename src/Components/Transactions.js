import axios from 'axios';
import { useEffect, useState } from 'react';
import Transaction from './Transaction';
import 'bootstrap/dist/css/bootstrap.min.css'

function Transactions() {
    const URL = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
        .get(`${URL}/transactions`)
        .then((response) =>{
            setTransactions(response.data)
        })
    }, [URL])

    const transactionsFile = transactions.map((transaction, index) => {
        return <td key={ index } index={ index } className='Transactions'>
            
            <p>{transaction.date}</p>
            <a href={`/transactions/${index}`}>{transaction.name}</a>
            <p>${transaction.amount}</p>
        </td>
    })

    return (
        <div className="container">
            <div row mt-3>
                <div className='col-sm'>
                    <div className='alert alert-success'>
                        <span>Account Total:</span>
                    </div>
                </div>
                <p>
                            <ul>
                       {transactionsFile}
                       </ul>
                       </p>
            </div>

            {/* <section>
                <table>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Account Total: </th>
                        </tr>
                    </thead>
                    <tbody>
                        <p>
                            <ul>
                       {transactionsFile}
                       </ul>
                       </p>
                    </tbody>
                </table>
            </section> */}
        </div>  
    );
};

export default Transactions;