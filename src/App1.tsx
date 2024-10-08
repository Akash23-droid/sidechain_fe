// import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Component/Dashboard.jsx";
import Dashboard2 from "./Component/Dashboard2/Dashboard2.jsx";
import Login from "./Component/Login.jsx";
import Jobs from "./Component/Dashboard2/Jobs.jsx";
import JobNotion from "./Component/Dashboard2/JobComponent/JobNotion.jsx";
import LoadingScreen from "./Component/LoadingScreen1.jsx";

function App1() {
  const { ready, authenticated } = usePrivy();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (authenticated) {
  //     setLoading(false);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [authenticated]);

  if (!ready) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={authenticated ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/dashboard2/*"
          element={authenticated ? <Dashboard2 /> : <Navigate to="/" />}
        />
        <Route
          path="/jobs"
          element={authenticated ? <Jobs /> : <Navigate to="/" />}
        />
        <Route
          path="/jobs/:jobTitle"
          element={authenticated ? <JobNotion /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App1;
