import ShowDetails from "../Components/ShowDetails"; 

function Show(props) {
    console.log(props)
    return (
        <div className="ShowDetails">

            <h2>Transaction Details:</h2>
            <ShowDetails />


        </div>
    );
};

export default Show;