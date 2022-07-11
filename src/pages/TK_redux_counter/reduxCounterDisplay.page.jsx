import { useSelector } from "react-redux";

const ReduxCounterDisplayPage = () => {
  const counter = useSelector((state) => state.counter.counter);
  return (
    <div className="alert alert-primary w-100 h-100" role="alert">
      {counter}
    </div>
  );
};

export default ReduxCounterDisplayPage;
