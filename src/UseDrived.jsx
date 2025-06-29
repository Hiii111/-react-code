import React, { useState } from 'react';

export default function UseDrived() {
     const [users, setUsers] = useState([]);
    const [input, setInput] = useState("");

    const handleAddUser = () => {
        if (input.trim() === "") return;
        setUsers(prevUsers => [...prevUsers, input.trim()]);
        setInput("");
    };

    const uniqueUsers = [...new Set(users)];
  return (
    <div>
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Total User : {users.length}</h1>
            <h2>Last User : {users[users.length - 1] || "None"}</h2>
            <h2>Total Unique Users : {uniqueUsers.length}</h2>

            <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder="Enter user name" 
            />
            <button onClick={handleAddUser}>Add User</button>

            <div style={{ marginTop: "20px" }}>
                {users.map((user, index) => (
                <div key={index}>{user}</div>
                ))}
            </div>
            </div>
    </div>
  )
}
