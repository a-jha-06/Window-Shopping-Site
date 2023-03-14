import './header.css';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {
    const { myReducer } = useStateValue();
    const [state] = myReducer;
 return (
 <header className="header">
    <div className="header_logo">
        <Link to="/">
        <AddBusinessIcon fontSize='large'/>&nbsp;
        <span className="header_logoName">Window Shopping</span>
        </Link>
    </div>
    <div className="header_search">
        <input className=" butt"/>&nbsp;
        <SearchIcon fontSize='small'/>

    </div>
    <div className="header_nav">
        <div className="header_nav_user">
            <span className="header_nav_lineOne">Hello Guest User</span>
            <br/>
            <br/>
        </div>&nbsp;
    </div>
    <div className="header_nav_itemBasket">
   
            <Link to="/checkout">
            <ShoppingCartIcon fontSize='small'/>{state.cartList.length}&nbsp;
            Cart
            <br/>
            </Link>
            
            
    </div>
 </header>
 )
}

export default Header;
