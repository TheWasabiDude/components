import './App.css';
import Header from './components/Header';
import News from './components/News';
import RandomItems from './components/RandomItems';
import RandomReviews from './components/RandomReviews';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RandomItems />
      <RandomReviews />
      <News />
    </div>
  );
}

export default App;
