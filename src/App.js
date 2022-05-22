import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [theme, setTheme] = useState("light");
  const [newsOfCountry, setNewsOfCountry] = useState("at");
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_API_KEY;

  const changeNewsOfCountry = async (country) => {
    await setNewsOfCountry(country);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "black";
    } else if (theme === "dark") {
      setTheme("light");
      document.body.style.backgroundColor = "rgb(235,233,233)";
    }
  };

  return (
    <Router>
      <div className="container-fluid m-0 p-0">
        <LoadingBar
          color="rgb(40, 176, 40)"
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          changeNewsOfCountry={changeNewsOfCountry}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home theme={theme} setProgress={setProgress} />}
          />
          <Route
            exact
            path="/about"
            element={<About theme={theme} setProgress={setProgress} />}
          />
          <Route
            exact
            path="/news/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                apiKey={apiKey}
                theme={theme}
                country={newsOfCountry}
                pageSize={6}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/news/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                apiKey={apiKey}
                theme={theme}
                country={newsOfCountry}
                pageSize={6}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/news/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                apiKey={apiKey}
                theme={theme}
                country={newsOfCountry}
                pageSize={6}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/news/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                apiKey={apiKey}
                theme={theme}
                country={newsOfCountry}
                pageSize={6}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/news/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                apiKey={apiKey}
                theme={theme}
                country={newsOfCountry}
                pageSize={6}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/news/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                apiKey={apiKey}
                theme={theme}
                country={newsOfCountry}
                pageSize={6}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/news/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                apiKey={apiKey}
                theme={theme}
                country={newsOfCountry}
                pageSize={6}
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
