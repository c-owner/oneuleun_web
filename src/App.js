import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Hello from "./views/Hello"

function App() {
  return (
      <div className="App">
          <div id="body" className="diary-app-body">
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/hello" element={<Hello/>} />
              </Routes>
          </div>
      </div>
  );
}

export default App;
