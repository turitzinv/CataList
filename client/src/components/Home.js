import React from "react";

const Home = ({user}) => {
  return (
    <div>
      <h1 className="home-headers">Full-Lists</h1>
      <h2 className="home-headers">Your lists at its fullest</h2>
      <p>Store your lists for just about anything! Packing, shopping, goals, agendas, list them all!</p>
      {user ? (
        null
      ): (
        <p>Please sign in or create an account</p>
      )}
    </div>
  );
};

export default Home;
