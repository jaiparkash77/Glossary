import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Bottom from './components/Bottom';
import Footer from './components/Footer';

function App() {
  const [query,setQuery] = useState('');
  return (
    <div className="App">
      <Header myQuery={(e)=>setQuery(e)} />
      <Main search={query} />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
