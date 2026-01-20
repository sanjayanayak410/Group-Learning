import React, { useState } from "react";
import { useAddUser } from "../hooks/AddUser";

const AddUser = () => {
  const [name, setName] = useState("");
  const mutation = useAddUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      name,
      email: `${name.toLowerCase()}@mail.com`,
    });

    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        {mutation.isLoading ? "Adding..." : "Add User"}
      </button>

      {mutation.isError && <p>Error adding user</p>}
      {mutation.isSuccess && <p>User added successfully</p>}
    </form>
  );
};

export default AddUser;
