import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name === "" || city === "") {
      alert("All fields required");
      return;
      
      const updatedList = users.map((u) => {
        if (u.id === editId) {
          return { ...u, name, city };
        }
        return u;
      });

      setUsers(updatedList);
      setEditId(null);
    } 
    // If adding → add new user
    else {
      setUsers([...users, { id: Date.now(), name, city }]);
    }

    // Clear fields
    setName("");
    setCity("");
  };

  const handleEdit = (user) => {
    setName(user.name);
    setCity(user.city);
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple React CRUD</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />{" "}
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <h3>User List</h3>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.city}
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
