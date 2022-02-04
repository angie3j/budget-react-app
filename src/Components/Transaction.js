import { Link } from "react-router-dom";

function Transaction({ transaction, id}) {
  return (
    
    <tr>
      <td>
        {transaction.date}
      </td>
      <td>
        <Link to={`/transactions/${id}`}>HELLO</Link>
      </td>
      
    </tr>
    
  );
};

export default Transaction;
