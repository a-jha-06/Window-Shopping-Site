import './card.css';
import Rating from './Rating';
import { useStateValue } from './StateProvider';
const Card = (props) =>{
 const {title, price, rating, description, category, imageURL} = props;
 const { myReducer } = useStateValue();
 const [,dispatch] = myReducer;

    const clickHanler = (selectedValue) => {
        const timeStame = new Date().getTime();
        selectedValue = { ...selectedValue, id:timeStame};
        
            dispatch({
            type:'ADD_TO_CART',
            payload: selectedValue
        })
    }

return (
    <div className='card'>
        <p className='title'>{ title }</p>
        <p className='price'> ${ price }</p>
        <p className='rating'><Rating rating ={ rating }/></p>
        <p className='description'>{ description }</p>
        <p className='category'>{ category }</p>
        <div className='imageholder'>
            <img src={imageURL} alt=''/>
            <br />
            <br />
            <button onClick={()=>clickHanler(props)}>Add to Cart</button>
        </div>
    </div>
)
    }
export default Card;