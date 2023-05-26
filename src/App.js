import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Card from './components/Card';
import Movie from './components/Movie';
import movies from './data/movies.json'
import  { useState } from 'react';


function App() {
  const [num, setNum] = useState(1);
  let info = {
    name: 'Tarikul Islam',
    age: '24',
    address: 'lalbag dhaka'
  }
  function add() {
    setNum(num+1);
  }
  function remove() {
    setNum(num-1);
  }
  return (
    <div className="App">
      <Header name='Top Header' />
      <div className="increment">
        <h1>Value: { num }</h1>
        <div className="flex">
          <button onClick={add} >Add</button>
          <button onClick={remove} >Remove</button>
        </div>
        </div>
      <Card data={info} />
      {
        movies.map((elem) => {
          
        return <Movie key={elem.imdbID} data={elem} />
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
