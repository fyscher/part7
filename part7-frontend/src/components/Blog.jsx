import { useDispatch } from "react-redux";
import { likeBlog } from "../reducers/blogReducer";
import { notify } from "../reducers/notificationReducer";
import Comments from "./Comments";
import AddComment from "./AddComment";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Blog = ({ blog }) => {
    const dispatch = useDispatch();

    const handleLike = (e) => {
        e.preventDefault();
        try {
            const changedLike = {
                ...blog,
                likes: blog.likes + 1,
            };
            console.log("handleLike changedLike: ", changedLike);
            dispatch(likeBlog(blog.id, changedLike));
            console.log("blog.id: ", blog.id);
            dispatch(notify("Blog Updated!"));
        } catch (err) {
            console.log("error: ", err);
            dispatch(notify("Cannot Update Blog"));
        }
    };

    return (
        <>
            <Card style={{ width: "auto" }} id={blog.id}>
                <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Link href={blog.url}>{blog.url}</Card.Link>
                    <Card.Text>{blog.likes} likes</Card.Text>
                    <Button variant="dark" onClick={handleLike}>
                        Like
                    </Button>
                    <Card.Subtitle style={{ margin: "1rem" }}>
                        added by {blog.user.username}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
            <Comments id={blog.id} />
            <AddComment id={blog.id} />
        </>
    );
};

export default Blog;
