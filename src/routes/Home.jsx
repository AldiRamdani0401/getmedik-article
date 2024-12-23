import { A } from "@solidjs/router";

function Home() {
  return (
      <div className="h-screen">
        <nav>
          <A href="/about">About</A>
        </nav>
        <h1>Home</h1>
      </div>
  );
}

export default Home;
