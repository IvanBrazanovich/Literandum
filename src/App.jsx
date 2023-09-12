import { Button, Layout, Row, Col } from "antd";
import Wants from "./Wants";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={<Home />} />
      </Routes>
    </>
  );
}

export default App;
