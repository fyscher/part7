import { Link } from "react-router-dom";
const Menu = () =>
{
  const padding =
    {
        paddingRight: 5
    }
    const user = null

    return(
        <div>
            <Link style={padding} to="/">Home</Link>
            <Link style={padding} to="/users">Users</Link>
            <Link style={padding} to="/about">About</Link>
            <Link style={padding} to="/create">Create New</Link>
            {user
                ? <em>{user} logged in</em>
                : <Link style={padding} to={"/login"}>Login</Link>
            }
        </div>
    )
}

export default Menu;