import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const { items } = cartCtx;
  const [setIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${setBtnIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    const timer = setBtnIsHighlighted(true);
    setTimeout(() => {
      setBtnIsHighlighted(false);
    },300);

    return () => {
      clearTimeout(timer);
    }
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>
        <span>3</span>
      </span>
    </button>
  );
};

export default HeaderCartButton;
