import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/user/Usersignup';
import Signin from './components/user/Signin';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
      <Routes>
      <Route path="/" element = {<Signin/>}/>
      <Route path="/" element={<AddUser/>} />
  </Routes>
  </div>
    </BrowserRouter>
      </div>
  );
}
export default App;

