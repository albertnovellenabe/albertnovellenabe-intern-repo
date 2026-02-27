import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HabitList } from "./components/HabitList/HabitList";

function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome to Focus Bear</h1>

      <HabitList />
    </main>
  );
}

export default App;
