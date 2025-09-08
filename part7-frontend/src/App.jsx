import { useState, useEffect } from "react";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import Login from "./components/Login";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";

import { setToken } from "./services/blogs";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem("loggedBlogUser");
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
            setToken(user.token);
        }
    }, []);

    const handleLogout = () => {
        window.localStorage.removeItem("loggedBlogUser"); // refactor logging in and hashes
        setToken("");
        setUser("");
        location.reload();
    };

    return (
        <div>
            <Notification />
            {user ? (
                <Togglable buttonLabel="Add Blog">
                    <p>{user.name} currently logged in</p>
                    <button onClick={handleLogout}>Log Out</button>
                    <AddBlog />
                    <Blogs />
                </Togglable>
            ) : (
                <Togglable buttonLabel="Login">
                    <Login />
                </Togglable>
            )}
        </div>
    );
};

export default App;
