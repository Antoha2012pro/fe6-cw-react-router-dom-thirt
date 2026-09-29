import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Users</h3>
      <div className="" id="main-users"></div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Users;
