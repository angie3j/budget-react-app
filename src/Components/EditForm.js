import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


function EditForm() {
    const URL = process.env.REACT_APP_API_URL;
    let { index } = useParams();
    const navigate = useNavigate();

    const [transactions, setTransactions] = useState({
        date: '',
        name: '',
        amount: '',
        from: ''
    });

    // const handleInputChange = (e)=>{
    //     setlog({...log, [e.target.id]: e.target.value})
    // };

    const handleTextChange = (event) => {
        setTransactions({ ...transactions, [event.target.id]: event.target.value});
    };

    useEffect(() => {
        axios
        .get(`${URL}/transactions/${index}`)
        .then((response) =>{
            setTransactions({
                date: response.data.date,
                name: response.data.name,
                amount: response.data.amount
            })
            .catch((error)=>{
                navigate("*")
            })
        })
    }, [index, navigate])

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios
        .put(`${URL}/transactions/${index}`, transactions)
        .then((response) => {
            navigate (`${URL}/transactions/${index}`)
        }).catch((error)=>{
            navigate("*")
        })
    };

    return (
        <div className='Edit'>
            <h2>Edit</h2>

            <form 
            action='/action_page.php'
            onSubmit={ handleSubmit }>
            <fieldset>
                <legend>Add</legend>
                <label htmlFor='date'>Date:</label>
                <input
                    id='date'
                    name='date'
                    value={ transactions.date }
                    type='text'
                    onChange={ handleTextChange }
                    placeholder='date'
                    required
                />

                <label htmlFor='name'>Name:</label>
                <input 
                    id='name'
                    name='name'
                    value={ transactions.name }
                    onChange={ handleTextChange }
                    placeholder='' 
                />

                <label htmlFor='amount'>Amount</label>
                <input 
                    id='amount'
                    type='number'
                    name='amount'
                    value={ transactions.amount }
                    placeholder='amount'
                    onChange={ handleTextChange }
                />

                <input type='submit' /> 

            </fieldset>
            </form>

            <div id='button'>
                <Link to={`/transactions/${index}`}>
                    <button>Back</button>
                </Link>
            </div>

        </div>
    );
};

export default EditForm;