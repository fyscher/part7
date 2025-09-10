const User = ({ user }) => {
    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <strong>Blogs Created</strong>
            </p>
            <ul>
                {user.blogs.map((b) => {
                    return <li>{b.title}</li>;
                })}
            </ul>
        </div>
    );
};

export default User;
