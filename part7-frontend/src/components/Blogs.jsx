import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeBlogs } from "../reducers/blogReducer";
import { Link } from "react-router-dom";
import DelBlog from "./DelBlog";

const Blogs = () => {
    const blogs = useSelector((state) => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeBlogs());
    }, []);

    return (
        <div>
            <h2>blogs</h2>
            {blogs.map((blog) => (
                <div key={`D_${blog.id}`}>
                    <Link to={`/blogs/${blog.id}`}>
                        <p>{blog.title}</p>
                    </Link>
                    <DelBlog id={blog.id} />
                </div>
            ))}
        </div>
    );
};

export default Blogs;
