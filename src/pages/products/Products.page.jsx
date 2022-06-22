import "./Products.page.css";

const initialProducts = [
  {
    img: "https://bigchill.com/Images/Products/RetropolitanFridge/RetropolitanFridge-3Q-BeachBlue-Main.jpg",
    title: "Fridge",
  },
  {
    img: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/https://img.poki.com/94945631828bfdcf32a8ad0b79978913.png",
    title: "Flying cars",
  },
  {
    img: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2022/3/9/gnwt9qi8ehywmif2bxrh/plane-swap-featured-image",
    title: "Planes",
  },
  {
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4299/4299700_sd.jpg;maxHeight=640;maxWidth=550",
    title: "Oven",
  },
];

const ProductsPage = () => {
  return (
    <div className="row">
      {initialProducts.map((item, idx) => {
        return (
          <div className="col" key={new Date().getMilliseconds() + idx}>
            <div className="card card-width">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  Shop refrigerators at Best Buy. Add a new fridge to your home
                  with our selection of French door refrigerators, mini fridges,
                  counter-depth refrigerators & more.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
