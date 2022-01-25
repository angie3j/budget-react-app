import axios from 'axios';
import { useEffect, useState } from 'react';

function Transaction() {
    const URL = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
        .get(`${URL}/transactions`)
        .then((response) =>{
            setTransactions(response.data)
        })
    }, [URL])

    const transactionsFile = transactions.map((eachTransaction, index) => {
        return <td key={ index } index={ index } className='Transactions'>
            
            <p>{eachTransaction.date}</p>
            <a href={`/transactions/${index}`}>{eachTransaction.name}</a>
            <p>${eachTransaction.amount}</p>
        </td>
    })

    return (
        <div className="Transactions">
            
                {/* <thead>
                    <tr>
                   
                    </tr>
                </thead>
                <tbody>{transactionsFile}</tbody> */}

        </div>  
    );
};

export default Transaction;