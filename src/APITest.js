import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const URL = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  const res = await fetch(URL);

  return res.json();
};

function APITest() {
  const { data, status, isError, isLoading } = useQuery("todos", fetchTodos);

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{status}</p>}
      <ol>{data && data.map((t, i) => <li key={i}>{t.title}</li>)}</ol>
    </div>
  );
}

export default APITest;
