import { Route } from 'react-router-dom';
import './App.css';
import Chat from './Pages/Chat';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Home}/>
      <Route path='/chat' exact component={Chat}/>
    </div>
  );
}

export default App;
