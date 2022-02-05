import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

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
        return (<div key={ id } id={ id } className='Transactions'> 
                <section>
                    <table>
                            <tr>
                                {/* <th></th> */}
                                <td>
                                    { transactions.date ? (
                                    <span>{ transactions.date }</span>
                                    ) : (
                                    <span>&nbsp; &nbsp; &nbsp;</span>
                                    )}
                                </td>
                                <td></td>
                                <td>
                                    <Link to={`/transactions/${id}`}>{ transactions.source }</Link>
                                </td>
                                <td></td>
                                <td>
                                    {transactions.amount ? (
                                        <span>{ transactions.amount }</span>
                                    ) : (
                                    <span>&nbsp; &nbsp; &nbsp;</span>
                                    )}
                                </td>
                            </tr>
                    </table>
                </section>
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