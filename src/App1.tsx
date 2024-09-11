import { useEffect, useState } from "react";
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



function App1() {
  const { authenticated } = usePrivy();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authenticated) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [authenticated]);

  if (loading) {
    return <div>Loading...</div>; // Optionally, add a loader here
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
          element={authenticated ? <Jobs/> : <Navigate to="/" />}
        />
        {/* <Route path="/work" element={<Work/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/posts" element={<Posts/>} /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App1;
