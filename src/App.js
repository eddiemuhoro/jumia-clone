import logo from './logo.svg';
import './App.css';
import Jnavbar from './components//JumiaNav/Jnavbar';
import Advert from './components/Pages/Advert/Advert';
import Categories from './components/Pages/Categories/Categories';
import TopItems from './components/Pages/TopSellingItems/TopItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleItem from './components/Pages/TopSellingItems/SingleItem';
import FlashSales from './components/Pages/FlashSales/FlashSales';
import Timer from './components/Pages/FlashSales/CountDown/CountDown';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PageNotFound from './components/Pages/PageNotFound';
import FirebaseTopItems from './components/FirebaseProducts/FirebaseTopItems';
import AddTopItems from './components/FirebaseAdmin/AddTopItems';
import AddTelevison from './components/FirebaseAdmin/AddTelevision';
import AddBeauty from './components/FirebaseAdmin/AddBeauty';
import Televisions from './components/Pages/televisions/Televisions';
import SingleCategory from './components/Pages/Categories/SingleCategory';
import Jfooter from './components/JumiaFooter/Jfooter';
import AddTopPicks from './components/FirebaseAdmin/AddTopPicks';
import TopPicks from './components/Pages/ForYou/TopPicks';
import SingleTopPick from './components/Pages/ForYou/SingleTopPick';
import SingleTv from './components/Pages/televisions/SingleTv';
import Cart from './components/Cart/Cart';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const onAdd=(product)=>{
    const exist = cartItems.find(x => x.id === product.id)
    if (exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty:exist.qty + 1} : x ))
    }else{
      setCartItems([...cartItems, {...product, qty:1}])
    }
  }


  

  return (
    <div className="App">
      
      <Jnavbar/>
      


      <main>

            <Routes>
            
              <Route path="/" element={<>
                <Advert/>
                <Categories/>
                  <TopPicks/>
                  <FlashSales/>
                    </>}/>
                  <Route path='admin' element={
                    <>
                      <AddTopPicks onAdd={onAdd}/>
                      <AddTopItems/>
                      <AddTelevison/>
                      <AddBeauty />
                    </>
                    
                }
                  />
                  <Route path='topSellingItems' element={<TopItems/>}/>
                  <Route path='toppicks' element={<TopPicks/>}/>
                  <Route path='toppicks/:id' element={<SingleTopPick/>}/>
                  <Route path='topSellingItems/:id' element={<SingleItem/>}/>
                  <Route path='televisions/:id' element={<SingleTv/>}/>
                  <Route path='cart' element={<Cart cartItems={cartItems}/>}/>


                  <Route path='categories/:title' element={<SingleCategory/>}/>
            </Routes>
     
        </main>

        <Jfooter/>
    </div>
  );
}

export default App;
