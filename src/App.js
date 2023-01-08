import { Route,Routes} from 'react-router-dom'
import Details from './Pages/Details'
import Search from './Pages/Search'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Navbaar from './components/Navbaar'

function App() {
  return (
    <div className="App">
      <Navbaar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
