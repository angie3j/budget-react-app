import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function ShowDetails() {
    const URL = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([]);
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
        // }).catch((error)=>{
        //     navigate("*");
        })
    }, []);

    

    const handleDelete = () => {
        axios
        .delete(`${URL}/transactions/${index}`)
        .then(()=> {
            navigate (`/transactions`)
        })
        // .catch((error)=>{
        //     console.log(error)
        // })
    };
 
    return (

        <div className='details'>
            <div className='showDetails'>
            <h6>Budget App</h6>
            <h6>Show</h6>
            <h6>Date: {transactions.date} </h6>
            <h6>   
                <span>
                <a href={transactions.url}>{transactions.name}</a>
                </span>{' '}
                {transactions.url}
            </h6>     
            <p>Transaction Type: {transactions.name}</p>
            <p>Amount: ${transactions.amount}</p>
            
            <div className='showNavigation'>

                <div>
                    {" "}
                    <Link to={`/transactions`}>
                        <button>Back</button>
                    </Link>
                </div>

                <div>
                    {" "}
                    <button onClick={handleDelete}>Delete</button>
                </div>

            </div>
            </div>
        </div>
       
    );
};

export default ShowDetails;