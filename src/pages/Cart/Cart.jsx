import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import CartItem from "../../components/CartItem";
import Button from "../../components/Common/Button";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  let content =
    cart.length > 0 ? (
      <>
        <div className={styles.checkout_wrapper}>
          <p className={styles.total}>
            Total: <span>${totalAmount}</span>
          </p>
          <Button to="#" className={styles.checkout_button}>
            Checkout
          </Button>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.list_wrapper}>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <aside className={styles.sidebar}>
            <form className={styles.support}>
              <p className={styles.support_title}>Support Code</p>
              <input
                className={styles.support_input}
                type="text"
                placeholder="Enter code"
              />
              <Button className={`${styles.support_button} disabled-link`}>
                Add
              </Button>
            </form>
          </aside>
        </div>
      </>
    ) : (
      <div className={styles.no_products_wrapper}>
        <p className={styles.no_products}>Show your bag some love!</p>
        <Button className={styles.products_button} to="/">
          Shop now
        </Button>
      </div>
    );
  return (
    <>
      <div className="mx-12">
        <div className={`${styles.container} main-container`}>
          <h1 className={styles.title}>Your bag</h1>
          {content}
        </div>
      </div>
    </>
  );
};

export default Cart;
