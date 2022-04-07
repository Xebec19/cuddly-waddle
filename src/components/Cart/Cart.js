import { useContext } from "react/cjs/react.production.min";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = id => {
    
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };
  const cartItems = (
    // <ul className={classes["cart-items"]}>
    //   { cartCtx.map((item) => (
    //     <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler} onAdd={cartItemAndHandler}/>
    //   ))}
    // </ul>
    <CartItem
    key={item.id}
    name={item.name}
    amount={item.amount}
    price={item.price}
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']}>Close</button>
          { hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
