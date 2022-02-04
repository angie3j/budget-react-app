import axios from 'axios';
import { useEffect, useState } from 'react';
// import Transaction from './Transaction';

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
        return <div key={ id } id={ id } className='Transactions'>
            
            <p>{transaction.date}</p>
            <a href={`/transactions/${id}`}>{transaction.source}</a>
            <p>${transaction.amount}</p>
        </div>
    })

    return (
        
        <div className="container">
            
          
        
                       {transactionsFile}
            
            
            
        </div>  
    );
};

export default Transactions;