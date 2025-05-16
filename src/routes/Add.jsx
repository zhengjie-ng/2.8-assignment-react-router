import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import styles from "./Add.module.css";

function Add() {
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Add</h2>
      <form className={styles.form}>
        <label>
          Name: <br></br>
          <input
            type="text"
            onChange={(event) => ctx.handlerUpdateAddForm(event, "name")}
          />
        </label>
        <label>
          Quantity: <br></br>
          <input
            type="number"
            onChange={(event) => ctx.handlerUpdateAddForm(event, "quantity")}
          />
        </label>
        <label>
          Price: <br></br>
          <input
            type="number"
            onChange={(event) => ctx.handlerUpdateAddForm(event, "price")}
          />
        </label>
        <label>
          Discount: <br></br>
          <input
            type="number"
            onChange={(event) => ctx.handlerUpdateAddForm(event, "discount")}
          />
        </label>
        <button
          className={styles.add}
          onClick={(e) => {
            ctx.handlerAddToCart(e);
            navigate("/view");
          }}
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}

export default Add;
