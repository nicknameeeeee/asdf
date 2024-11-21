import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./both/main";
import Quiz1 from "./quizone/quiz1"
import Quiz2 from "./quiztwo/quiz2"
import Quiz3 from "./quizthree/quiz3"
import Quiz4 from "./quizfour/quiz4"

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
