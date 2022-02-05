import axios from 'axios';
import { useEffect, useState } from 'react';
// import Transaction from './Transaction';

function Transactions() {

    const URL = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        console.log("hello!!")

        axios
        .get(`${URL}/transactions`)
        .then((response) =>{
            setTransactions(response.data)
        })

        .catch((error) => console.warn('catch'))

    }, [URL])

    const transactionsFile = transactions.map((transaction, id) => {
        return (<div key={ id } id={ id } className='Transactions'> 
        
            <p>{transaction.date}</p>
            <a href={`/transactions/${id}`}>{transaction.source}</a>
            <p>${transaction.amount}</p>
             </div>)
    })
    

    // let total = transactions.map((transaction) => transaction.amount);

    // let amount = total.reduce((prev, curr) => Number(prev) + Number(curr));

    return (
        
        <div className="container">
            {/* <h1>Budget Total: {"$" + amount.toFixed(2)}</h1> */}
                       {transactionsFile}
        </div> 
        
        
    //      <div className="Transactions">
    //      <section>
    //        <table>
    //          <thead>
    //            <tr>
    //              <th></th>
    //              <th>Take me there</th>
    //              <th>See this bookmark</th>
    //            </tr>
    //          </thead>
    //          <tbody>

    //            {transactions.map((transaction, id) => {
    //                    return (<tr key={ id } id={ id } className='Transactions'>
    //            <p>{transaction.date}</p>
    //     <a href={`/transactions/${id}`}>{transaction.source}</a>
    //     <p>${transaction.amount}</p>
    //      </tr>)
    //            })}
    //          </tbody>
    //        </table>
    //      </section>
    //    </div>
    );
};


export default Transactions;