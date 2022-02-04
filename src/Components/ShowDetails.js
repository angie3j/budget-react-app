import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import React from 'react';


function ShowDetails() {
    const URL = process.env.REACT_APP_API_URL;
    const [transaction, setTransactions] = useState([]);
    // console.log(transactions)
    const navigate = useNavigate();
    // useParams returns an object that we can deconstruct from.
    let { index } = useParams();

    // useEffect explained:
    // Get request for the index of the array. 
    // It will render on each chance in order to present the most recent/accurate information 
    // what arguments does useEffect take? 
    // 1- callback function useEffect (() => {})
    // 2- array []- => leave it blank if you're running useEffect only 1x
    // Where can we get this [id]? 
    // 
    useEffect(() => {
        axios
        .get(`${URL}/transactions/${index}`)
        // the response we get from the server is response.data 
        .then((response) => {
            // console.log(response.date)
            setTransactions((response.data)) 
        .catch ((error) => console.warn(error))
    }, [URL, index])
})
    //  console.log(transactions)
    
    // is a function that makes an axios request
    const handleDelete = () => {
        // make a delete request to /transactions/:index
        axios
        .delete(`${URL}/transactions/${index}`)
        // redirect them to /transactions
        .then((response)=> {
            navigate (`/transactions`)
            .catch ((error) => console.warn(error))
        })
    };

     
    return (
        // <article>
        //     {/*  Pursuit 
        //     https://www.pursuit.org
        //         // TODO change condition to: `bookmark.is_favorite`
        //         // TODO change name to: `bookmark.name` 
        //         */ }
        //     <h2>{transactions.is_favorite ? 'favorite' : '&nbsp;&nbsp;'} {transactions.name}</h2>
        //     <h4>
        //         {/* a link to the bookmark's url that has the name as text */}
        //         <a href='transactions' target='_blank'>{transactions.name}</a>
        //         <span>{transactions.category}</span>
        //     </h4>
        //     <p>{transactions.amount}</p>

        //     <div className='showNavigation'>
        //         <div>
        //             <Link to='/transactions'>
        //                 <button>Back</button>
        //             </Link>
        //         </div>

        //         <div>
        //             <Link to='/transactions/:id/edit'>
        //                 <button>Edit</button>
        //             </Link>
        //         </div>

        //         <div>
        //             <button onClick={handleDelete}>Delete</button>
        //         </div>

        //     </div>
        // </article>

        <div className='Details'>
            <div className='showDetails'>

                <h3>Date: {transaction.date} </h3>

                <h3>Transaction Type: {transaction.source}</h3>

                <h3>Amount: {transaction.amount}</h3>
                
                <h3>Category: {transaction.category}</h3>

            <div className='showNavigation'>   

                <div>
                    <h1>
                    {" "}
                    <Link to={`/transactions`}>
                        <button>Back</button>
                    </Link>
                    </h1>
                </div>
                <div>
                    <div>
                    {" "}
                    <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
    }


export default ShowDetails;