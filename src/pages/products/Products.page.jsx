import { useState } from "react";
import { cloneDeep } from "lodash";
import CardItemComponent from "../../components/cardItem/CardItem.component";
import "./Products.page.css";

const initialProducts = [
  {
    img: "https://bigchill.com/Images/Products/RetropolitanFridge/RetropolitanFridge-3Q-BeachBlue-Main.jpg",
    title: "Fridge",
    id: "asdf2314q2erfaswd",
  },
  {
    img: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/https://img.poki.com/94945631828bfdcf32a8ad0b79978913.png",
    title: "Flying cars",
    id: "asdf2314q2erfasw2",
  },
  {
    img: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2022/3/9/gnwt9qi8ehywmif2bxrh/plane-swap-featured-image",
    title: "Planes",
    id: "asdf2314q2erfasw1",
  },
  {
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4299/4299700_sd.jpg;maxHeight=640;maxWidth=550",
    title: "Oven",
    id: "asdf2314q2erfaswswd",
  },
];

const ProductsPage = () => {
  const [productsArr, setProductsArr] = useState(initialProducts);

  const handleDeleteItem = (id) => {
    console.log("id to delete", id);
    /* cloneDeep create perfect copy of productsArr.
      this way we be safe and we wont update the state directly 
    */
    let newArray = cloneDeep(productsArr);
    setProductsArr(newArray.filter((item) => item.id != id));
  };

  return (
    <div className="row">
      {productsArr.map((item) => {
        return (
          <CardItemComponent
            key={item.id}
            {...item}
            onDeleteItem={handleDeleteItem}
          />
        );
      })}
    </div>
  );
};

export default ProductsPage;
