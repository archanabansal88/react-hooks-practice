import { useCallback, useState } from "react";
import ChildComponent from "./childComponent";

const allUsers = ["john", "alex", "george", "simon", "james"];

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(allUsers);

  const handlesearch = useCallback(
    (text) => {
      console.log(users[0]);
      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <ChildComponent onChange={handlesearch} />
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
