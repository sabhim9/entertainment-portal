import './App.css';
import Navbar from './navbar';
import Home from './home';
import Favourites from './favourites';
import Addfvrt from './addfvrt';
import About from './about';
// import State from './state';
import Footer from './footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// function App() {

//   return (
//     <div className="App">
//       <Navbar/>
//       <Home/>
//       <Favourites/>
//       <Addfvrt/>
//       <About/>
//       {/* <State/> */}
//       <Footer/>


//     </div>
//   );
// }

function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />  
            {/* #dont use uppercase in path while mention route path. */}
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/addfvrt' element={<Addfvrt />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
