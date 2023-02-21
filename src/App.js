import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { BackTitle } from './PageStyles';
import ListPage from './pages/ListPage/ListPage';

function App() {
  return (
    <div className="App">
      <BackTitle>
        Find a Delicious Slice
        <br />
        at the Bake Shop
      </BackTitle>
      {/*<MainPage />*/}
      <ListPage />
    </div>
  );
}

export default App;
