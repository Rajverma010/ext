import React, { useState } from "react";
import usersData from "./data.json"; // Import static data

function App() {
  const [users, setUsers] = useState(usersData);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [editId, setEditId] = useState(null);

  // Add or Update User
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !city) return;

    if (editId) {
      // Update existing user
      const updatedUsers = users.map((user) =>
        user.id === editId ? { ...user, name, city } : user
      );
      setUsers(updatedUsers);
      setEditId(null);
    } else {
      // Add new user
      const newUser = {
        id: Date.now(), // unique id
        name,
        city,
      };
      setUsers([...users, newUser]);
    }

    // clear input2
    setName("");
    setCity("");
  };

  // Delete User
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Edit User
  const handleEdit = (user) => {
    setName(user.name);
    setCity(user.city);
    setEditId(user.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React CRUD Example (JSON File)</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">{editId ? "Update User" : "Add User"}</button>
      </form>

      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>{user.name}</b> - {user.city}{" "}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;