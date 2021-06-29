import React,{useState} from 'react';
import './App.css';
import SearchForm from './Components/Form'
import TVShow from './Components/TVShow'
import { Container} from 'react-bootstrap';

function App() {

  const [searchText, setSearchText] = useState("");

  const getSearchText = (text) => {
    setSearchText(text);
  }
  return (
    <Container>
      <div className="App-header"> Welcome to TV Show Zone</div>
      <SearchForm getSearchText={getSearchText}/>
      <TVShow searchText={searchText}/>
    </Container>
  );
}

export default App;
