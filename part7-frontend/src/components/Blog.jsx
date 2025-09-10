import { useDispatch } from "react-redux";
import { likeBlog } from "../reducers/blogReducer";
import { notify } from "../reducers/notificationReducer";

const Blog = ({ blog }) => {
    const dispatch = useDispatch();
    const handleLike = (e) => {
        e.preventDefault();
        try {
            dispatch(likeBlog(blog.id));
            dispatch(notify("Blog Updated!"));
        } catch (err) {
            console.log("error: ", err);
            dispatch(notify("Cannot Update Blog"));
        }
    };

    return (
        <>
            <div id={blog.id}>
                <h2>{blog.title}</h2>
                <a href={blog.url}>{blog.url}</a>
                <p>{blog.likes} likes</p>
                <button onClick={handleLike}>Like</button>
                <p>added by {blog.user.username}</p>
            </div>
        </>
    );
};

export default Blog;
