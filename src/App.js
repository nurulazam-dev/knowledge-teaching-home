import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Routes>
      <Route path="/" element={<Home />} />


      <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
