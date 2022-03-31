import React from "react";
import "./css/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div classNameName="App">
      <Header />
      <main>
        <div className="content">
          <h1 className="content-header">Developer, Engineer, Life-Learner</h1>
          <h2 className="content-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolore voluptate voluptatem necessitatibus maxime eveniet quasi
            enim, nostrum sit iste a laboriosam minima rem eos dolores voluptas
            ea illo molestias.
          </h2>
          <div className="content-quote">
            <p>
              <q>
                You have power over your mind — not outside events. Realize
                this, and you will find strength.
              </q>
              <br />- Marcus Aurelius
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
