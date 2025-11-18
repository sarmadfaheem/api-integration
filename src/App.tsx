import { Route, Routes } from "react-router-dom";
import PostListing from "./Components/PostListing";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pc" element={<PostListing />} />
    </Routes>
  );
}

export default App;
