import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function EditForm() {
    const URL = process.env.REACT_APP_API_URL;
    let { index } = useParams();
    const navigate = useNavigate();

    const [transaction, setTransactions] = useState({
        date: '',
        source: '',
        amount: 0,
    });
    
    useEffect(() => {
        axios
        .get(`${URL}/transactions/${index}`)
        .then((response) => {
            setTransactions(
                 response.data)
            })
            .catch((error)=>{
                navigate("*")
            });
    }, [URL, index, navigate])


    const handleTextChange = (event) => {
        setTransactions({ ...transaction, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios
            .put(`${URL}/transactions/${index}`, transaction)
        // .then((response) => {
            // navigate (`${URL}/transactions/${index}`)
            .then(() => {
            navigate (`/transactions/${index}`)
        // .catch((error)=>{
        //     navigate("*")
        // })
            });
    };

    return (
        <div className='Edit'>
            <form 
            style={{color: "gray"}}
            action='/action_page.php'
            onSubmit={ handleSubmit }>
                <br />
                <br />
            <fieldset style={{color:"dark gray"}}>
                <legend>EDIT TRANSACTION</legend>
                <br />
                <h3>
                <label htmlFor='date'>Date:</label>
                <input
                    id='date'
                    name='date'
                    value={ transaction.date }
                    type='text'
                    onChange={ handleTextChange }
                    placeholder='date'
                    required   
                />
                </h3>
                <br />
                <br />
                <h3>
                        <label htmlFor='from'>Source</label>
                        <select 
                            id="source" 
                            name="source"
                            onChange={handleTextChange}>
                            <option value="source">source</option>
                            <option value="food">Food</option>
                            <option value="housing">Housing</option>
                            <option value="insurance">Insurance</option>
                            <option value="medical">Medical</option>
                            <option value="personal">Personal</option>
                            <option value="savings">Savings</option>
                            <option value="transportation">Transportation</option>
                            <option value="utilities">Utilities</option>
                        </select>
                    </h3>
                    <br />
                    <br />
                <h3>
                <label htmlFor='amount'>Amount:</label>
                <input 
                    id='amount'
                    type='number'
                    name='amount'
                    value={ transaction.amount }
                    placeholder='amount'
                    onChange={ handleTextChange }
                />
                </h3>
                <br />
                <br />
                <input 
                type='submit' /> 
                <br />
                <br />
            </fieldset>
            </form>
        </div>
        
    );
};

export default EditForm;