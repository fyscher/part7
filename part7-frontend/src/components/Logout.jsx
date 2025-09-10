import { useDispatch, useSelector } from "react-redux";
import { sendLogOut } from "../reducers/loginReducer";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(sendLogOut());
        navigate("/login");
    };

    return (
        <div>
            <p>{user.name} currently logged in</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default Logout;
