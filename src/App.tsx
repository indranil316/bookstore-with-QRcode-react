import AppWrapper from './components/AppWrapper';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import BookPage from './pages/BookPage';
import './styles/globals.scss';

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/book/:isbn' element={<BookPage/>}/>
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App