// Import data

// Import components
import './App.css';
import Searchbar  from './Search.js';
import Directory from './Directory.js';
import Gallery from './Gallery.js';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar/>
        <Directory/>
        <Gallery/>
           
      </div>
    </div>
  );
}

export default App;
