
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Footer from './Footer';
import NewPost from './NewPost';
import Blog from './Blog';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>} /> 
        <Route path='/newpost' element = {<NewPost/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
