import { useState } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counter";

const ReduxCounterPage = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const handleNumberChange = (ev) => {
    setNumber(ev.target.value);
  };
  const handleBtnClicked = () => {
    dispatch(counterActions.addNumber(number));
  };
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleInputnumber1" className="form-label">
          Number
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputnumber1"
          value={number}
          onChange={handleNumberChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleBtnClicked}>
        Add
      </button>
    </div>
  );
};

export default ReduxCounterPage;
