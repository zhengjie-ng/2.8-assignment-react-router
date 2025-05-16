import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import styles from "./Edit.module.css";

function Edit() {
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Edit</h2>
      <form className={styles.form}>
        <label>
          Name: <br></br>
          <input
            type="text"
            value={ctx.edit.name}
            onChange={(event) => ctx.handlerUpdateEditForm(event, "name")}
          />
        </label>
        <label>
          Quantity: <br></br>
          <input
            type="number"
            value={ctx.edit.quantity}
            onChange={(event) => ctx.handlerUpdateEditForm(event, "quantity")}
          />
        </label>
        <label>
          Price: <br></br>
          <input
            type="number"
            value={ctx.edit.price}
            onChange={(event) => ctx.handlerUpdateEditForm(event, "price")}
          />
        </label>
        <label>
          Discount: <br></br>
          <input
            type="number"
            value={ctx.edit.discount}
            onChange={(event) => ctx.handlerUpdateEditForm(event, "discount")}
          />
        </label>
        <button
          className={styles.add}
          onClick={(e) => {
            ctx.handlerUpdateProduct(e);
            navigate("/view");
          }}
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

export default Edit;
