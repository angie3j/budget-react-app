import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Form() {
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const [transactions, setTransactions] = useState({
        date: '',
        name: '',
        amount: 0,
        from: '',
        category: ''
    });

    const handleTextChange = (event) => {
        setTransactions({...transactions, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post(`${URL}/transactions`, transactions)
        .then(()=> navigate (`/transactions`))
    };

    return (
        <div className='New'>
           
            <form 
            style={{color: "gray"}}
            className='newForm'
            onSubmit={handleSubmit}>
            <br />
                
                <fieldset style={{color: "gray"}}>
                    
                    <legend style={{color: "gray"}}>Create a New Item</legend>
                    <br />

                    <h3>
                        <label htmlFor='date'>Date</label>
                        <input 
                            id='date'
                            name='date'
                            value={transactions.date}
                            type='text'
                            onChange={handleTextChange}
                            placeholder='date'
                            required
                        />
                    </h3>
                    <br />

                    <h3>
                        <label htmlFor='from'>Category</label>
                        <select id="category" name="category">
                            <option value="category">category</option>
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
                    
                    <h3>
                        <label htmlFor='amount'>Amount</label>
                        <input 
                            id='amount'
                            name='amount'
                            value={transactions.amount}
                            type='text'
                            onChange={handleTextChange}
                            placeholder='amount'
                            required
                        />
                    </h3>
                    <br />

                    <h3>
                        <label htmlFor='from'>From</label>
                        <input 
                            id='from'
                            name='from'
                            value={transactions.from}
                            type='text'
                            onChange={handleTextChange}
                            placeholder='from'
                        />
                    </h3>
                    <br />

                    <h3>
                        <button style={{color: "gray"}}>Create New Item</button>
                    </h3>
                    <br />

                </fieldset>
            </form>

        </div>
    );
};

export default Form;