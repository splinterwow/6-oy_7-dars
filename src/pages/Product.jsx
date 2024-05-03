import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    Error,
  } = useFetch("https://dummyjson.com/products/" + id);

  console.log(product);
  return (
    <>
      {product && (
        <div className="align-content">
          <h1 className="text-3xl mb-5">Product - {product.title}</h1>
          <div className="carousel carousel-center mt-6 p-4 space-x-4 bg-neutral rounded-box">
            {product.images.map((image) => {
              return (
                <div key={image} className="carousel-item">
                  <img src={image} className="rounded-box max-h-60 lg:max-h-80 h-full object-contain" />
                </div>
              );
            })}
          </div>

          <p className="text-3xl mt-5">
            <b> Brand: </b>
            {product.brand}
          </p>
          <p className="text-3xl mt-5">
             <b>Description: </b>
            {product.description}
          </p>

          <p className="text-4xl mt-5 ">
           <b> Rating: </b>
            {product.rating}%
          </p>

          <p className="text-4xl  mt-5 mb-8 ">
            <b>Price: </b>
            ${product.price}
          </p>
        </div>
      )}
    </>
  );
}

export default Product;
