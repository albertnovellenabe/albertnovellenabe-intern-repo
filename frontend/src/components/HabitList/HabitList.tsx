import React, { useState, useEffect } from "react";

interface Habit {
  id: number;
  name: string;
}

export const HabitList = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch("http://localhost:3000/habits");
        if (!response.ok) throw new Error("Failed to fetch habits");

        const data = await response.json();
        setHabits(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  if (loading) return <div>Loading habits...</div>;
  if (error) return <div role="alert">{error}</div>;

  return (
    <div>
      <h2>Your Focus Bear Habits</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
};
