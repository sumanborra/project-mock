import {FaShoppingCart} from 'react-icons/fa'
import './index.css'

const Header = props => {
  const {items} = props
  return (
    <nav className="nav-container">
      <p className="tittle-nav">UNI Resto Cafe</p>
      <div className="cart-icon-container">
      <p>My Orders</p>
        <FaShoppingCart size={50} color="#616161" />
        <sup className="special-text">{items}</sup>
      </div>
    </nav>
  )
}
export default Header
