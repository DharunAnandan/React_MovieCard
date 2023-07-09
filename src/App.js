import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import DetailMovie from './components/Main/DetailMovie';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/main/movie/:i' element={<DetailMovie/>}/>
        

        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Login/>}/>
         
        {/* error page */}
        <Route path="*" element={<Error/>}/>

      </Routes>
      {/* <Main/> */}
    </div>
  );
}

export default App;
