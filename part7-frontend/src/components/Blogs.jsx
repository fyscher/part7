import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeBlogs } from "../reducers/blogReducer";
import { Link } from "react-router-dom";
import DelBlog from "./DelBlog";
import ListGroup from "react-bootstrap/ListGroup";

const Blogs = () => {
    const blogs = useSelector((state) => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeBlogs());
    }, []);

    return (
        <>
            <h2>blogs</h2>
            <ListGroup as="ul">
                {blogs.map((blog) => (
                    <ListGroup.Item key={`D_${blog.id}`}>
                        <Link to={`/blogs/${blog.id}`}>
                            <p>{blog.title}</p>
                        </Link>
                        <DelBlog id={blog.id} />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
};

export default Blogs;
