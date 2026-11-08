import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="page-container cart-page">
      <header className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
      </header>
      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Find a plant that feels at home with you.</p>
          <Link className="primary-button" to="/plants">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {items.map(item => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product-info">
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>Item total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button aria-label={`Decrease ${item.name}`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name}`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <button className="delete-button" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
              </article>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button className="primary-button" onClick={() => window.alert('Coming Soon!')}>Checkout</button>
            <Link className="secondary-button" to="/plants">Continue Shopping</Link>
          </div>
        </>
      )}
    </main>
  );
}