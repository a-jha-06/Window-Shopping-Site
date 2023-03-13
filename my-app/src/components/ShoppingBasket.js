import './shoppingBasket.css';
import { useStateValue } from './StateProvider';
const ShoppingBasket = () => {
  const { myReducer } = useStateValue();
  const [state,dispatch] = myReducer;

  const clickHanler = (id) => {
    dispatch({
      type:'REMOVE_FROM_CART',
      payload:id
    })

  }

  return(
    <div className="shoppingBasket">
      <h2>Your Shopping Basket</h2>
      <hr/>
      <ul className='list'>
        {
        state.cartList.map((item, index) => ( <li key={index}>
          <div className='imageHolder'>
            <img src={item.imageURL}alt="" />
          </div>
          <div className='itemDetails'>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>{item.category}</div>
            <p><strong>{item.price}</strong></p>
            <div>{item.rating}</div>
            <button onClick={()=>clickHanler(item.id)}>Remove from Cart</button>
          </div>
         </li>))
         }
      </ul>
    </div>
  )
}

export default ShoppingBasket;