import { useState } from "react";
import { useDispatch } from "react-redux";
import { notify } from "../reducers/notificationReducer";
import { sendLogIn } from "../reducers/loginReducer";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            dispatch(sendLogIn({ username, password }));
            setUsername("");
            setPassword("");
        } catch (exception) {
            console.log("login error: ", exception);
            dispatch(notify("Wrong Credentials"));
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input
                        type="text"
                        value={username}
                        name="Username"
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    password
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    );
};

export default Login;
