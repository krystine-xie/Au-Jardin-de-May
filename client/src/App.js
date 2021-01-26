import './App.css';
import { Router } from '@reach/router';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
      </Router>
    </div>
  );
}

export default App;
