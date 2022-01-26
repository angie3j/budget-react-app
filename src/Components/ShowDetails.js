import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import React from 'react';

function ShowDetails() {
    const URL = process.env.REACT_APP_API_URL;
    const [transaction, setTransactions] = useState([]);
    let { index } = useParams();
    const navigate = useNavigate();

    // Get request for the index of the array. 
    // It will render on each chance in order to present the most recent/accurate information 
    useEffect(() => {
        axios
        .get(`${URL}/transactions/${index}`)
        .then((response) => {
            console.log(response)
            setTransactions(response.data) 
        })
    }, [URL, index]);

    const handleDelete = () => {
        // make a delete request to /transactions/:index
        axios
        .delete(`${URL}/transactions/${index}`)
        // redirect them to /transactions
        .then((response)=> {
            navigate (`/transactions`)
        })
    };
 
    return (

        <div className='Details'>
            <div className='showDetails'>

                <h3>Date: {transaction.date} </h3>

                <h3>Transaction Type: {transaction.name}</h3>

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
       
    );
};

export default ShowDetails;