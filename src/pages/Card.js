import "./Card.css";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "./Store"
import { addToCart } from "./Store";
export const Card = ({ data }) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch({
      type: ADD_TO_CART, 
      payload: data,    
    });
  };

  return (
    <provider>
    <div className="card">
      <img src={data.img} alt="product picture" width={300} height={200} />
      <div>{data.name}</div>
      <div>{data.price}</div>
      <div>
        <button onClick={handleCart}>Add to Cart</button>
      </div>
    </div>
</provider>  );
};
