import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Route, Router } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Form from './Pages/New';
import Show from './Pages/Show';
import Edit from './Pages/Edit';

// Components
import NavBar from './Components/NavBar';
import Transaction from './Components/Transactions';

function App() {
  return (
    <div className='wrapper'>

      <Router>
        <NavBar />
        <main>

          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/transactions' element={ <Transaction />} />
            <Route path='/transactions/new' element={ <Form />} />
            <Route exact path='/transactions/:index' element={ <Show />} />
            <Route path='/transactions/:index/edit' element={ <Edit />} />
          </Routes>

        </main>
      </Router>
     
    </div>
  );
};

export default App;
