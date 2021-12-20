import './App.css';
import Header from './components/Header';
import News from './components/News';
import RandomItems from './components/RandomItems';

function App() {
  return (
    <div className="App">
      <Header />
      <RandomItems />
      <News />
    </div>
  );
}

export default App;
