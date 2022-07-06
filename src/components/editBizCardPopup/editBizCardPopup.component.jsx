import { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const EditBizCardPopupComponent = ({
  bizName,
  bizDescription,
  bizAddress,
  bizPhone,
  bizImage,
  onEditDone,
  onCancelEdit,
}) => {
  const [bizName, setBizName] = useState(bizName);
  const [bizDescription, setBizDescription] = useState(bizDescription);
  const [bizAddress, setBizAddress] = useState(bizAddress);
  const [bizPhone, setBizPhone] = useState(bizPhone);
  const [bizImage, setBizImage] = useState(bizImage);

  const handleBizNameChange = (ev) => {
    setBizName(ev.target.value);
  };
  const handleBizDescriptionChange = (ev) => {
    setBizDescription(ev.target.value);
  };
  const handleBizAddressChange = (ev) => {
    setBizAddress(ev.target.value);
  };
  const handleBizPhoneChange = (ev) => {
    setBizPhone(ev.target.value);
  };
  const handleBizImageChange = (ev) => {
    setBizImage(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleConfirmClick = () => {
    //! joi validation
    let dataToSend = {
      bizName,
      bizDescription,
      bizAddress,
      bizPhone,
    };
    if (bizImage) {
      dataToSend.bizImage = bizImage;
    }
    onEditDone(dataToSend);
  };

  const handleCancelClick = () => {
    onCancelEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="bizNameInput" className="form-label">
          Biz Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="bizNameInput"
          value={bizName}
          onChange={handleBizNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bizDescriptionInput" className="form-label">
          Biz Description:
        </label>
        <input
          type="text"
          className="form-control"
          id="bizDescriptionInput"
          value={bizDescription}
          onChange={handleBizDescriptionChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bizAddressInput" className="form-label">
          Biz Address:
        </label>
        <input
          type="text"
          className="form-control"
          id="bizAddressInput"
          value={bizAddress}
          onChange={handleBizAddressChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bizPhoneInput" className="form-label">
          Biz Phone:
        </label>
        <input
          type="text"
          className="form-control"
          id="bizPhoneInput"
          value={bizPhone}
          onChange={handleBizPhoneChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bizImageInput" className="form-label">
          Biz Image (url):
        </label>
        <input
          type="text"
          className="form-control"
          id="bizImageInput"
          value={bizImage}
          onChange={handleBizImageChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleConfirmClick}
      >
        <FontAwesomeIcon icon={faCircleCheck} />
      </button>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={handleCancelClick}
      >
        <FontAwesomeIcon icon={faBan} />
      </button>
    </form>
  );
};

export default EditBizCardPopupComponent;
