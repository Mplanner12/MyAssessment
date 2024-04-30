// import React from 'react'
import Budget from "./Budget";
import Category from "./Category";
// import Dock from "./Dock";
// import Dock from "./Dock";
import Nav from "./Nav";
import Spending from "./Spending";

const Home = () => {
  return (
    <main className="h-screen relative bg-slate-50">
      <Nav />
      <Budget />
      <Spending />
      <Category />
    </main>
  );
};

export default Home;
