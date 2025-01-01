import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./both/main";
import Quiz1 from "./quizone/quiz1"
import Quiz2 from "./quiztwo/quiz2"
import Quiz3 from "./quizthree/quiz3"
import Quiz4 from "./quizfour/quiz4"
import Quiz5 from "./quizfive/quiz5"
import Escape from "./escape/escape"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<Quiz1 />} path="/quizone"></Route>
          <Route element={<Quiz2 />} path="/quiztwo"></Route>
          <Route element={<Quiz3 />} path="/quizthree"></Route>
          <Route element={<Quiz4 />} path="/quizfour"></Route>
          <Route element={<Quiz5 />} path="/quizfive"></Route>
          <Route element={<Escape />} path="/escape"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
