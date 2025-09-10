import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import Users from "./components/Users";
import { useSelector } from "react-redux";

const App = () => {
    const user = useSelector((state) => state.user);

    return (
        <div className="container">
            <Notification />
            {user ? (
                <Togglable buttonLabel="Add Blog">
                    <Logout />
                    <Users />
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
