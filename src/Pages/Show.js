import ShowDetails from "../Components/ShowDetails"; 

function Show(props) {
// function Show(props) {
    // console.log(props)
    return (
        <div className="ShowDetails">

            <h2 style={{color: "gray"}}>Transaction Details:</h2>
            <ShowDetails />
      
        </div>
    );
};

export default Show;