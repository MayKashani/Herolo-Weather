import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Favorites from './components/Favorites';


function App() {
  return (
    <BrowserRouter>
    <div style={{display:'flex',width:'100vw',flexDirection:'column'}}>

    <Header/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  

  );

}

export default App;
