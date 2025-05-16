import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./View.module.css";

function View() {
  const ctx = useContext(ProductContext);
  return (
    <div>
      <h2>View</h2>
      <nav className={styles.list}>
        {ctx.list.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to={`/view/${item.id}`}
            key={item.id}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default View;
