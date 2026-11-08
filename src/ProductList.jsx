import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import { plantCategories } from './data/plants.js';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isAdded = id => cartItems.some(item => item.id === id);

  return (
    <main className="page-container">
      <header className="page-heading">
        <p className="eyebrow">FIND YOUR GREEN COMPANION</p>
        <h1>Our Houseplants</h1>
        <p>Explore plants selected to make every room feel more alive.</p>
      </header>
      {plantCategories.map(category => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map(plant => (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <div className="plant-card-body">
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price.toFixed(2)}</p>
                  <button
                    className="primary-button add-button"
                    disabled={isAdded(plant.id)}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isAdded(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}