import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import styles from "./index.module.scss";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };
  return (
    <div className={styles.card}>
      <div className={styles.info_container}>
        <div className={styles.info_wrapper}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.size}>{item.category}</p>
          <p className={styles.price}>${item.price}</p>
        </div>
        <div className="h-[170px] w-[150px]">
          <img src={item.image} className="h-full " alt="item" />
        </div>
      </div>

      <div className={styles.controls_wrapper}>
        <div className={styles.delete_wrapper}>
          <i className={styles.delete_icon} onClick={removeFromCart}>
            <FaTrash />
          </i>
        </div>
        <div className={styles.quantity_wrapper}>
          <i className={styles.minus_icon}>
            <FaMinus />
          </i>
          <div className={styles.quantity}>
            <span className={""}>1</span>
          </div>
          <i className={styles.plus_icon}>
            <FaPlus />
          </i>
        </div>
        <div className={styles.total}>${item.price}</div>
      </div>
    </div>
  );
};

export default CartItem;
