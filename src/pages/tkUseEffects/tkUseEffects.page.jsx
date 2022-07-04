import { Fragment, useState, useEffect } from "react";

const TkUseEffectsPage = () => {
  const [txt, setTxt] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const handleTxtChange = (ev) => {
    setTxt(ev.target.value);
  };
  useEffect(() => {
    setShowBtn(txt.length >= 3);
  }, [txt]);

  return (
    <Fragment>
      <input type="text" value={txt} onChange={handleTxtChange} />
      <button disabled={!showBtn}>click</button>
    </Fragment>
  );
};
export default TkUseEffectsPage;
