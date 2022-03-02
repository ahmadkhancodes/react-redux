import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h1>Balance : {account}</h1>
      <button onClick={() => depositMoney(2000)}>Deposit 2000</button>
      <button onClick={() => withdrawMoney(2000)}>Withdraw 2000</button>
    </div>
  );
}

export default App;
