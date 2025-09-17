import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../reducers/usersReducer";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Users = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <Table striped="true" variant="dark">
                <thead>
                    <tr>
                        <th>
                            <strong>Users</strong>
                        </th>
                        <th>
                            <strong>Blogs Created</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        ? users.map((u) => {
                              return (
                                  <tr key={`D_${u.id}`}>
                                      <td>
                                          <a href={`/users/${u.id}`}>
                                              {u.username}
                                          </a>
                                      </td>
                                      <td>
                                          <p>{u.blogs.length}</p>
                                      </td>
                                  </tr>
                              );
                          })
                        : null}
                </tbody>
            </Table>
        </div>
    );
};

export default Users;
