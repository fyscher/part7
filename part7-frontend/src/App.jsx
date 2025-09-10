import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import AddBlog from "./components/AddBlog";
import Login from "./components/Login";
import Notification from "./components/Notification";
import Users from "./components/Users";
import User from "./components/User";
import Menu from "./components/Menu";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useMatch } from "react-router-dom";

const App = () => {
    const user = useSelector((state) => state.user);
    const users = useSelector((state) => state.users);
    const blogs = useSelector((state) => state.blogs);

    const userMatch = useMatch("/users/:id");
    const userLookup = userMatch
        ? users.find((u) => u.id === userMatch.params.id)
        : null;

    const blogMatch = useMatch("/blogs/:id");
    const blogLookup = blogMatch
        ? blogs.find((b) => b.id === blogMatch.params.id)
        : null;

    return (
        <div className="container">
            <Menu />
            <Notification />
            <Routes>
                <Route
                    path="/users"
                    element={
                        user ? <Users /> : <Navigate replace to="/login" />
                    }
                />
                <Route
                    path="/users/:id"
                    element={
                        user ? (
                            <User user={userLookup} />
                        ) : (
                            <Navigate replace to="/login" />
                        )
                    }
                />
                <Route
                    path="/create"
                    element={
                        user ? <AddBlog /> : <Navigate replace to="/login" />
                    }
                />
                <Route path="/" element={<Blogs />} />
                <Route
                    path="/blogs/:id"
                    element={
                        user ? (
                            <Blog blog={blogLookup} />
                        ) : (
                            <Navigate replace to="/login" />
                        )
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
