import React from "react";
import "./Home.css";
import { Button } from "../../components";

export type HomeProps = {
  name: string;
};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container">
      <header></header>
      <aside>
        <Button text="Click Me!" />
      </aside>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Home;
