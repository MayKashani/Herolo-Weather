import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Favorites from './components/Favorites';
  
const API_KEY = 'UkzOVeJRGoKNfEpcnCVEWe3qLSd5atJR'


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
