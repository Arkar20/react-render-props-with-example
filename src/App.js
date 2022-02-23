import "./styles.css";
import { useEffect, useState } from "react";
import List from "./List";
import BgBlueListItem from "./BgBlueListItem";
import BgYellowItem from "./BgYellowItem";
export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => setTodos(result.splice(0, 10)));
  }, []);
  // console.log(todos);
  return (
    <div className="App">
      {todos && (
        <List
          items={todos}
          render={(item) => <BgBlueListItem key={item.id} item={item} />}
        />
      )}

      {todos && (
        <List
          items={todos}
          render={(item) => <BgYellowItem key={item.id} item={item} />}
        />
      )}
    </div>
  );
}
