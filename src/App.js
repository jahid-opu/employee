import logo from './logo.svg';
import './App.css';
import data from './fakeData/data.json'
import { useState } from 'react';
import Profiles from './components/Profiles/Profiles';
import Cart from './components/Cart/Cart';

function App() {
  const [users,setUsers] = useState(data);
  const [cart,setCart] = useState([]);
  
  const handleAddProfile =(user)=>{
    const newCart = [...cart,user];
    setCart(newCart);
  }
  return (
    <div>
      <div className="user">

      {
        users.map(user => <Profiles user = {user} cart = {handleAddProfile}></Profiles>)
      }
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>

    </div>
  );
}

export default App;
