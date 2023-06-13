import Router from "./route/Router";
import { useAuth } from "./contexts/AuthContext";
import { useState, useEffect } from "react";

function App() {
  const { user } = useAuth();

  // if (!user) {
  //   return <p>Loading</p>;
  // }

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
