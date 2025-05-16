import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import styles from "./Item.module.css";
function Item() {
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const product = ctx.list.find((item) => item.id === id);

  return (
    <div className={styles.itemDetails}>
      <h3>Product ID: {id}</h3>
      <p>Name: {product.name}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Price: {product.price}</p>
      <p>Discount: {product.discount}</p>
      <Link
        className={styles.link}
        to={`/view/${id}/edit`}
        onClick={() => ctx.handlerEditProduct(id)}
      >
        ✏️
      </Link>
      <button
        className={styles.itemButton}
        onClick={() => {
          ctx.handlerDeleteProduct(id);
          navigate("/view");
        }}
      >
        ❌
      </button>
    </div>
  );
}

export default Item;
