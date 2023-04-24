import { useEffect } from "react";
import { useState } from "react";

import Users from "../components/Users";

export default function CountPage() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [id, setId] = useState(0);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  return (
    <>
      <h1 style={{ color: "blue" }}>users list</h1>

      <ul>
        <li>
          <span className="sp">id:</span> {user.id}
        </li>
        <li>
          <span className="sp">name:</span> {user.name}
        </li>
        <li>
          <span className="sp">username:</span> {user.username}
        </li>
        <li>
          <span className="sp">email:</span> {user.email}
        </li>
        <li>
          <span className="sp">phone:</span> {user.phone}
        </li>
        <li>
          <span className="sp">website:</span> {user.website}
        </li>
      </ul>

      <ul>
        {users.map((el) => {
          return <Users setId={setId} id={el.id} name={el.name} />;
        })}
      </ul>
    </>
  );
}
