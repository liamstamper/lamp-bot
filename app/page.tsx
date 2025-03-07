import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Hero />
      </div>
    </>
  );
}

export default Home;
