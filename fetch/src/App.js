
import './App.css';
import Get from './components/Get';
// import Post from "./components/Post"
// import GetBasedonId from './components/GetBasedonId';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* <Post /> */}

      <BrowserRouter>
        <Routes>
          {/* <Route path="users/:id" element={<GetBasedonId />} /> */}
          <Route path="/" element={<Get />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
