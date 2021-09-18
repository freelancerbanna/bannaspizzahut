import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../actions/userAuth";
import Error from "../components/Error";
import Loading from "../components/Loading";

const UserList = () => {
  const userState = useSelector((state) => state.allUserReducer);
  const { loading, error, allUser } = userState;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h1>Order List</h1>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {allUser && (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((user, i) => (
              <tr key={i}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt.substring(0, 10)}</td>
                <td>
                  <i
                    className="fa fa-trash"
                    style={{ cursor: "pointer", marginTop: "6px" }}
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserList;
