import Blog from "./Blog";
import DelBlog from "./DelBlog";
import { useSelector } from "react-redux";

const Blogs = () => {
    const blogs = useSelector(({ blogs }) => blogs);
    return (
        <div>
            <h2>blogs</h2>
            {blogs.map((blog) => (
                <div key={`D_${blog.id}`}>
                    <Blog blog={blog} id={blog.id} />
                    <DelBlog id={blog.id} />
                </div>
            ))}
        </div>
    );
};

export default Blogs;
