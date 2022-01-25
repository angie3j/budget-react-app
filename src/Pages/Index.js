import Transaction from "../Components/Transactions";

function TransactionsPage() {
    return (
        <div className="Transactions">

            <h2>Bank Account Total: </h2>
            <Transaction />
        </div>
    );
};

export default TransactionsPage;