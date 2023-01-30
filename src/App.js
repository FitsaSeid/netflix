import './App.css';
import Banner from './Components/Banner/Banner';
import Row from './Components/Row/Row';
import subURL from './API_Request/urls';
import './Components/Row/Row.css'

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Netflix original"
        fetchURL={subURL.fetchNetflixTrending}
        largePoster={true} />
      <Row title="Top Rated Movies"
        fetchURL={subURL.fetchTopRated} />
      <Row title="DOCUMENTARY"
        fetchURL={subURL.fetchDocumentaries} />
    </div>
  );
}

export default App;
