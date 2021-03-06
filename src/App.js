import UsersCards from "./Components/UsersCards";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(USERS_ENDPOINT).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="Cards">
      {users.map((user, id) => (
        <UsersCards user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
