import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Rules from './components/Rules';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App