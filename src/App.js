import './App.css';
import AddNote from './components/AddNote/AddNote';
import Header from './components/Header/Header';
import ViewNote from './components/ViewNote/ViewNote';

const App = () => {

  return (
    <div className="App">
      <Header />
      <AddNote  />
      <ViewNote />
    </div>
  );
}

export default App;
