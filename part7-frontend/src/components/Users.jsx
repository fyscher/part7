import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../reducers/usersReducer";

const Users = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <table striped="true">
                <thead>
                    <tr>
                        <td>
                            <strong>Users</strong>
                        </td>
                        <td>
                            <strong>Blogs Created</strong>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users
                        ? users.map((u) => {
                              return (
                                  <tr key={`D_${u.id}`}>
                                      <td>{u.username}</td>
                                      <td>{u.blogs.length}</td>
                                  </tr>
                              );
                          })
                        : null}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
