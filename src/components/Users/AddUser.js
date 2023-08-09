const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.prevent.default();
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text"></input>
      <label htmlFor="age"></label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;