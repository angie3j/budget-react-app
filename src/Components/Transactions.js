import axios from 'axios';
import { useEffect, useState } from 'react';

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
            <div>
                <p>
                    <ul>
                       {transactionsFile}
                    </ul>
                </p>
            </div>
        </div>  
    );
};

export default Transactions;