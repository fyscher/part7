import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import Login from "./components/Login";
import Notification from "./components/Notification";
import Users from "./components/Users";
import Menu from "./components/Menu";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
    const user = useSelector((state) => state.user);
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
                    path="/create"
                    element={
                        user ? <AddBlog /> : <Navigate replace to="/login" />
                    }
                />
                <Route path="/" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
