import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [showLogo, setShowLogo] = React.useState(true);
  const [bgColor, setBgColor] = React.useState<"red" | "blue" | "green">("red");
  React.useEffect(() => {
    const colors = ["red", "blue", "green"] as const;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setBgColor(colors[i % 3]);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="App" onClick={() => setShowLogo((prev) => !prev)}>
      <header className="App-header">
        {showLogo && <img src={logo} className="App-logo" alt="logo" />}
        <p style={{ background: "red" }}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
