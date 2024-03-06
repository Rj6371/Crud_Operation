
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import EditForm from './components/EditForm';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/editForm' element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
