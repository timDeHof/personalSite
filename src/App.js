import React from "react";
import {
  Navbar,
  About,
  Projects,
  Skills,
  Testimonials,
  Contact,
} from "./components";

function App() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
