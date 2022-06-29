import axios from "axios";
import { useState, Fragment } from "react";
import FakeApiCardComponent from "../../components/fakeApiCard/fakeApiCard.component";

const FirstAjaxPage = () => {
  const [itemArr, setItemArr] = useState([]);
  const handleBtnClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        console.log("data from axios", data.data);
        setItemArr(data.data);
      })
      .catch((err) => console.log("errr", err));
  };
  return (
    <Fragment>
      <button className="btn btn-success" onClick={handleBtnClick}>
        send request
      </button>

      {itemArr.map((item) => (
        <FakeApiCardComponent
          key={item.id}
          title={item.title}
          body={item.body}
        />
      ))}
    </Fragment>
  );
};

export default FirstAjaxPage;
