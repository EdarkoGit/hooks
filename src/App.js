import "./App.css";
import Form from "./components/Form/Form";
import { Routes, Route } from "react-router-dom";
import Other from "./components/Other/Other";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
