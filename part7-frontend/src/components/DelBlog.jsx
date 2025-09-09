import { deleteBlog } from "../reducers/blogReducer";
import { useDispatch } from "react-redux";
import { notify } from "../reducers/notificationReducer";

const DelBlog = ({ id }) => {
    const dispatch = useDispatch();

    const handleDeleteBlog = async (e) => {
        e.preventDefault();
        try {
            console.log(id);
            dispatch(deleteBlog(id));
            dispatch(notify("Blog Deleted!"));
        } catch (exception) {
            console.log(exception);
            dispatch(notify("Blog cannot be deleted!"));
        }
    };
    return (
        <button type="button" onClick={handleDeleteBlog}>
            Delete
        </button>
    );
};

export default DelBlog;
