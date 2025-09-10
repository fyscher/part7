import { useDispatch, useSelector } from "react-redux";
import { sendLogOut } from "../reducers/loginReducer";

const Logout = () => {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(sendLogOut());
    };

    return (
        <div>
            <p>{user.name} currently logged in</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default Logout;
