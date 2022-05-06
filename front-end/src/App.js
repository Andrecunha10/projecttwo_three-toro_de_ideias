import { Route, Routes } from "react-router-dom";
import { PageColaboracao } from "./pages/colaboracao";
import { DashboardPage } from "./pages/dashboard";
import { PageManageProblems } from "./pages/gerencieproblemas";
import { MainHome } from "./pages/home";
import { LoginPage } from "./pages/login";
import { PageNotFound } from "./pages/notfound";
import { PageProblem } from "./pages/problema";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainHome />} />
      <Route path="/colaboracao" element={<PageColaboracao/>} />
      <Route path="/problema/:id" element={<PageProblem/>} />
      <Route path="/dashboard" element={<DashboardPage />}/>
      <Route path="/dashboard/problemas" element={<PageManageProblems/>} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}


export default App;
