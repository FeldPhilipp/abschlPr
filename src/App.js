import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/tests/Home';
import Test from './components/tests/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
