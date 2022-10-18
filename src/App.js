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

function App() {
  const items=[
    {
        title:'Lenovo Laptop',
        price: 'Ksh 12,400',
        undiscountedPrice: 'Ksh 15,000',
        id:1

    },
    {
        title:'Tecno Camon 16',
        price: 'Ksh 20,300',
        undiscountedPrice: 'Ksh 22,340',
        id:2
    },
    {
        title:'Redmi 9A',
        price:'Ksh 16,400',
        undiscountedPrice: 'Ksh 18,230',
        id:3
    },
    {
        title:'Samsung Galaxy A12',
        price: 'Ksh 23,300',
        undiscountedPrice: 'Ksh 25,620',
        id:4
    },
    {
        title:'DSTV',
        price: 'Ksh 3,000',
        undiscountedPrice: 'Ksh 3,500',
        id:5
    
    },
    {
        title:'Nexus Kettle',
        price: 'Ksh 4,400',
        undiscountedPrice: 'Ksh 5,600',
        id:6
    }
]
  return (
    <div className="App">
      
      <Jnavbar/>
      <Advert/>
      <Categories/>
      <TopItems/>
      <FlashSales/>
      
     





        {/* <Routes>
        <Route path="/" element={ <TopItems/> }/>

        {
          items.map(cat => (
            <Route key={cat} path={`/`} element={<SingleItem/>} />
          ))
}
           
        </Routes> */}
     

    </div>
  );
}

export default App;
