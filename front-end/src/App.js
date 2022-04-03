import { Route, Routes } from "react-router-dom";
import { PageColaboracao } from "./pages/colaboracao";
import { MainHome } from "./pages/home";
import { PageNotFound } from "./pages/notfound";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainHome />} />
      <Route path="/colaboracao" element={<PageColaboracao/>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}


export default App;
