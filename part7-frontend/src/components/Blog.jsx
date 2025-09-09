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
                <p>Title: {blog.title}</p>
                <p>Author: {blog.author}</p>
                <p>Likes: {blog.likes}</p>
            </div>
            <button onClick={handleLike}>Like</button>
        </>
    );
};

export default Blog;
