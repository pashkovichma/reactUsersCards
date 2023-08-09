import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.prevent.default();
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text"></input>
        <label htmlFor="age"></label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
    
  );
}

export default AddUser;