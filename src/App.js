import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the <code>official website</code> of Art Congo Lab designed by Art-Code.
        </p>
        <a
          className="App-link"
          href="https://dev-acl-news.pantheonsite.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Art Congo Lab blog
        </a>
      </header>
    </div>
  );
}

export default App;
