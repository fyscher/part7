import { useState, useEffect } from "react";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import Login from "./components/Login";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import { useDispatch } from "react-redux";
import { initializeBlogs } from "./reducers/blogReducer";
import { setToken } from "./services/login";

const App = () => {
    const [user, setUser] = useState(null);

    const dispatch = useDispatch();

    //make notification store
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorStatus, setErrorStatus] = useState("");

    const notify = (label, message) => {
        setErrorStatus(label);
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage(null);
        }, 5000);
    };
    //

    useEffect(() => {
        dispatch(initializeBlogs());
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
            <Notification
                errorMessage={errorMessage}
                errorStatus={errorStatus}
            />
            {user ? (
                <Togglable buttonLabel="Add Blog">
                    <p>{user.name} currently logged in</p>
                    <button onClick={handleLogout}>Log Out</button>
                    <AddBlog />
                    <Blogs />
                </Togglable>
            ) : (
                <Togglable buttonLabel="Login">
                    <Login setErrorMessage={setErrorMessage} />
                </Togglable>
            )}
        </div>
    );
};

export default App;
