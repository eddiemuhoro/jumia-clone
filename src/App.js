import logo from './logo.svg';
import './App.css';
import Jnavbar from './components//JumiaNav/Jnavbar';
import Advert from './components/Pages/Advert/Advert';
import Electronics from './components/Pages/Advert/CategoriesTypes/Electronics/Electronics';
import HomeAppliances from './components/Pages/Advert/CategoriesTypes/Home/HomeAppliances';

function App() {
  return (
    <div className="App">
      
     <Jnavbar />
     <Advert />
     {/* <Electronics/>
     <HomeAppliances/> */}
    </div>
  );
}

export default App;
