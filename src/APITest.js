import React, { useEffect, useState } from "react";

const URL = "https://js3onplaceholder.typicode.com/todos";

function APITest() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setIsLoaded(true);
        setTodos(data);
        setError(null);
      } catch (err) {
        setError(err);
        setIsLoaded(true);
        setTodos([]);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {!isLoaded && <p>Loading...</p>}
      {error && <p>Error: {error} </p>}
      <ol>
        {todos.map((t) => (
          <li>{t.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default APITest;
