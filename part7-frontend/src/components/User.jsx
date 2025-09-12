import { Link } from "react-router-dom";

const User = ({ user }) => {
    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <strong>Blogs Created</strong>
            </p>
            <ul>
                {user.blogs.map((b) => {
                    return (
                        <Link key={`B_${b.id}`} to={`/blogs/${b.id}`}>
                            {b.title}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default User;
