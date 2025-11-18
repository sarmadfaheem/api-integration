import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <title>Home</title>
      <header>
        <Navbar />
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
