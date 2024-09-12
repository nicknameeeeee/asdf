import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./both/main";
import Quiz1 from "./quizone/quiz1"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<Quiz1 />} path="/quizone"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
