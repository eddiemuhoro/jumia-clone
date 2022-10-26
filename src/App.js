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

function App() {



//   const items=[
//     {
//         title:'Lenovo Laptop',
//         price: 'Ksh 12,400',
//         undiscountedPrice: 'Ksh 15,000',
//         id:1

//     },
//     {
//         title:'Tecno Camon 16',
//         price: 'Ksh 20,300',
//         undiscountedPrice: 'Ksh 22,340',
//         id:2
//     },
//     {
//         title:'Redmi 9A',
//         price:'Ksh 16,400',
//         undiscountedPrice: 'Ksh 18,230',
//         id:3
//     },
//     {
//         title:'Samsung Galaxy A12',
//         price: 'Ksh 23,300',
//         undiscountedPrice: 'Ksh 25,620',
//         id:4
//     },
//     {
//         title:'DSTV',
//         price: 'Ksh 3,000',
//         undiscountedPrice: 'Ksh 3,500',
//         id:5
    
//     },
//     {
//         title:'Nexus Kettle',
//         price: 'Ksh 4,400',
//         undiscountedPrice: 'Ksh 5,600',
//         id:6
//     }
// ]
  return (
    <div className="App">
      
      <Jnavbar/>
      


      <main>

            <Routes>
            
              <Route path="/" element={<>
                <Advert/>
                  <Categories/> 
                  <TopItems/>
                  <FlashSales/>
                  <TopPicks/>
                    </>}/>
                  <Route path='admin' element={
                    <>
                      <AddTopPicks/>
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


                  <Route path='categories/:title' element={<SingleCategory/>}/>
            </Routes>
     
        </main>

        <Jfooter/>
    </div>
  );
}

export default App;
