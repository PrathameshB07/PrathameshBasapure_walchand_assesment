import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Private/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
