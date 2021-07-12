import "./App.css";
import Box from "./components/box";

function App() {
  return (
    <div>
      <h1>Counter</h1>
      <div className="App">
        <Box className="Box" />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default App;
