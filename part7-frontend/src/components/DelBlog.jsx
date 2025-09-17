import { deleteBlog } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";

const DelBlog = ({ id }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const handleDeleteBlog = async (e) => {
        e.preventDefault();
        dispatch(deleteBlog(id));
    };
    if (!user) {
        return null;
    }
    return (
        <button type="button" onClick={handleDeleteBlog}>
            Delete
        </button>
    );
};

export default DelBlog;
