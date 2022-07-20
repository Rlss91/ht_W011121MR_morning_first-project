import { useState } from "react";
import { cloneDeep } from "lodash";
import AnimalItemComponent from "../../components/animalItem/animalItem.component";
import "./animals.page.scss";

const initArr = [
  { _id: 1, name: "dog" },
  { _id: 2, name: "iguana" },
  { _id: 3, name: "cat" },
  { _id: 4, name: "fish" },
  { _id: 5, name: "monkey" },
  { _id: 6, name: "donkey" },
  { _id: 7, name: "unicorn" },
  { _id: 8, name: "chupakabra" },
];
const AnimalsPage = () => {
  const [animalsArr, setAnimalsArr] = useState(initArr);
  const handleDeleteAnimal = (id) => {
    let newAnimalsArr = cloneDeep(animalsArr);
    newAnimalsArr = newAnimalsArr.filter((item) => item._id != id);
    setAnimalsArr(newAnimalsArr);
  };
  return (
    <div className="animals-container-grid">
      {animalsArr.map((item) => (
        <AnimalItemComponent
          key={"animals" + item._id}
          animal={item.name}
          id={item._id}
          onDeleteAnimal={handleDeleteAnimal}
        />
      ))}
    </div>
  );
};
export default AnimalsPage;
