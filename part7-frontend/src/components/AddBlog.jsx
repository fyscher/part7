import { useState } from "react";
import { notify } from "../reducers/notificationReducer";
import { createBlog } from "../reducers/blogReducer";
import { useDispatch } from "react-redux";

const AddBlog = () => {
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newURL, setNewURL] = useState("");

    const handleTitleChange = (e) => setNewTitle(e.target.value);
    const handleAuthorChange = (e) => setNewAuthor(e.target.value);
    const handleURLChange = (e) => setNewURL(e.target.value);

    const dispatch = useDispatch();

    const newObject = {
        title: newTitle,
        author: newAuthor,
        url: newURL,
    };

    const handleAddBlog = async (e) => {
        e.preventDefault();
        try {
            dispatch(createBlog(newObject));
            dispatch(notify(`${newTitle} has been added!`));
            setNewTitle("");
            setNewAuthor("");
            setNewURL("");
        } catch (exception) {
            console.log(exception);
            notify("Cannot Add Blog");
        }
    };

    return (
        <div>
            <h3>New Blog:</h3>
            <form onSubmit={handleAddBlog}>
                <div>
                    Title:{" "}
                    <input value={newTitle} onChange={handleTitleChange} />
                </div>
                <div>
                    Author:{" "}
                    <input value={newAuthor} onChange={handleAuthorChange} />
                </div>
                <div>
                    URL: <input value={newURL} onChange={handleURLChange} />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddBlog;
