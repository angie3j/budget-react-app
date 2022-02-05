import { Link } from "react-router-dom";

function Transaction({ transaction, id }) {
  // console.log(transaction);
  return (
    <tr>
      <td>
        {transaction.date ? (
          <span>{transaction.date}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td></td>
      <td>
        <Link to={`/transactions/${id}`}>{transaction.source}</Link>
      </td>
      <td>
        {transaction.amount ? (
          <span>{transaction.amount}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
    </tr>
  );
}

export default Transaction;


// import { Link } from "react-router-dom";

// function Transaction({ transaction, id}) {
//   return (
    
//     <tr>
//       <td>
//         {transaction.date}
//       </td>
//       <td>
//         <Link to={`/transactions/${id}`}>HELLO</Link>
//       </td>
      
//     </tr>
    
//   );
// };

// export default Transaction;
