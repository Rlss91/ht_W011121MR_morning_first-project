import { useRef } from "react";
import "./amazonItemsContainer.component.css";
import imgItem from "../../assets/imgs/ssd.png";

const AmazonItemsContainerComponent = () => {
  const itemsDiv = useRef();
  const handlePrevBtn = () => {
    itemsDiv.current.scrollLeft -= 200;
  };
  const handleNextBtn = () => {
    itemsDiv.current.scrollLeft += 200;
  };
  return (
    <div className="items-wrapper mt-2 position-relative">
      <div>Title</div>
      <button className="btn btn-success over-btn" onClick={handlePrevBtn}>
        prev
      </button>
      <button
        className="btn btn-success over-btn over-btn-right"
        onClick={handleNextBtn}
      >
        next
      </button>
      <div className="items-wrapper-imgs" ref={itemsDiv}>
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
        <img src={imgItem} alt="ssd 300 pb" />
      </div>
    </div>
  );
};

export default AmazonItemsContainerComponent;
