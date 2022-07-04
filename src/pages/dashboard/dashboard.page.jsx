import { Fragment, useState, useEffect } from "react";
import axios from "axios";

const DashboardPage = () => {
  const [cardsArr, setCardsArr] = useState([]);
  useEffect(() => {
    handleLoadCardsClick();
    console.log("use effect");
  }, []);
  const handleLoadCardsClick = () => {
    axios
      .get("/cards")
      .then((res) => {
        console.log(res.data);
        let newArr = [];
        let inArr = [];
        let l = res.data.length;
        for (let i = 0; i < l; i++) {
          if (i > 0 && i % 3 === 0) {
            newArr = [
              ...newArr,
              <div className="row" key={i + "cards row"}>
                {[...inArr]}
              </div>,
            ];
            inArr = [];
          }
          inArr = [
            ...inArr,
            <div className="col" key={i + "cards row"}>
              {res.data[i].bizName}
            </div>,
          ];
        }
        if (inArr.length > 0) {
          newArr = [
            ...newArr,
            <div className="row" key={l + "cards row"}>
              {[...inArr]}
            </div>,
          ];
        }
        setCardsArr(newArr);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <Fragment>
      <button onClick={handleLoadCardsClick}>load cards</button>
      {cardsArr}
    </Fragment>
  );
};

export default DashboardPage;
