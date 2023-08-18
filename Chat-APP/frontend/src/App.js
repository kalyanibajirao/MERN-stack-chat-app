import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact></Route>
      <Route path="/chat" component={ChatPage}></Route>
    </div>
  );
}

export default App;
