import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const addCartItemHandler = (item) => {
    ctx.addItem({ ...item, quantity: 1 });
  };
  const removeCartItemHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={removeCartItemHandler.bind(null,item.id)}
          onAdd={addCartItemHandler.bind(null,item)}
        ></CartItem>
      ))}
    </ul>
  );

  const noOfItems = ctx.cartItems.length;
  return (
    <Modal onRemoveCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {noOfItems > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
