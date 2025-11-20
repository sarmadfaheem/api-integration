import { Route, Routes } from "react-router-dom";
import PostListing from "./Components/PostListing";
import Home from "./Components/Home";
import IndividualPost from "./Components/IndiviualPost";
import Users from "./Components/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pc" element={<PostListing />} />
      <Route path="/ind/:id" element={<IndividualPost />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
