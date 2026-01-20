import Users from "../components/Users";
import AddUser from "../components/AddUser";

const Home = () => {
  return (
    <div>
      <h1>React Query Server State Demo</h1>
      <AddUser />
      <Users />
    </div>
  );
};

export default Home;
