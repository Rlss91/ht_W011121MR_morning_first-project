import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const AnimalItemComponent = ({ animal, onDeleteAnimal, id }) => {
  const handleDeleteAnimal = () => {
    onDeleteAnimal(id);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{animal}</h5>
        <button className="btn btn-primary" onClick={handleDeleteAnimal}>
          <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
export default AnimalItemComponent;
