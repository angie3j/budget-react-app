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
            className='newForm'
            action='/action_page.php' 
            onSubmit={handleSubmit}
            >
            <fieldset>
                <legend>Add</legend>
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

                <label htmlFor='name'>Transaction</label>
                <input
                    id='name'
                    name='name'
                    value={transactions.name}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='name'
                    required
                />

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

                <label htmlFor='from'>From</label>
                <input 
                    id='from'
                    name='from'
                    value={transactions.from}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='from'
                />

                <label htmlFor='category'>Category</label>
                <input 
                    id='category'
                    name='category'
                    value={transactions.category}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='category'
                    required
                />

                <button>CREATE NEW ITEM</button>
                
            </fieldset>
            </form>

        </div>


    );
};

export default Form;