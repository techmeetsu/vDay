import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Valentine from "./Valentine";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div>
      <header className="App-header">
        <a
          className="App-link"
          href="https://emergent.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/2107/2107845.png" />
        </a>
        <p className="mt-5">Built something incredible for you</p>
        <p className="mt-3">
          <a href="/valentine" style={{ color: '#FF6B9D', textDecoration: 'underline', fontSize: '1.2rem' }}>
            💖 Proposal for you
          </a>
        </p>
      </header>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valentine" element={<Valentine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
