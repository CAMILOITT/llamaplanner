import { Route, Routes } from 'react-router';
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import Configuration from './page/project/configuration/Configuration';
import Project from './page/project/Project';
import AllStrategies from './page/project/strategies/allStrategies/AllStrategies';
import Strategies from './page/project/strategies/Strategies';
import StrategiesReport from './page/project/strategies/strategiesReport/StrategiesReport';
import SummaryStrategies from './page/project/strategies/summaryStrategies/SummaryStrategies';
import Summary from './page/project/summary/Summary';
import ProtectedRouter from './components/ProtectedRouter';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route element={<ProtectedRouter />}> */}
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Project />}>
          <Route index element={<Summary />} />
          <Route path="strategies" element={<Strategies />}>
            <Route index element={<AllStrategies />} />
            <Route path="summary" element={<SummaryStrategies />} />
            <Route path="reports" element={<StrategiesReport />} />
          </Route>
          <Route path="config" element={<Configuration />} />
        </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
