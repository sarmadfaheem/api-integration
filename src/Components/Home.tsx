import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <title>Home</title>
      <header>
        <nav className="text-white">
          <Link to="/">Home</Link>
          <Link to="/pc">Posts</Link>
        </nav>
        <div>
          <h1 className="text-5xl text-center py-8 text-white">
            CRUD with Tanstack
          </h1>
        </div>
      </header>
    </>
  );
}

export default Home;
