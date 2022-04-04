import { Route, Routes } from "react-router-dom";
import { PageColaboracao } from "./pages/colaboracao";
import { MainHome } from "./pages/home";
import { PageNotFound } from "./pages/notfound";
import { PageProblem } from "./pages/problema";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainHome />} />
      <Route path="/colaboracao" element={<PageColaboracao/>} />
      <Route path="/problema" element={<PageProblem/>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}


export default App;
