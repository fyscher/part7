import { useDispatch } from "react-redux";
import useField from "../hooks/useField";
import { createComment } from "../reducers/commentsReducer";
import { notify } from "../reducers/notificationReducer";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const AddComment = ({ id }) => {
    const { field, value, setValue } = useField("text");
    const dispatch = useDispatch();

    const newObject = {
        content: value,
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        try {
            dispatch(createComment(id, newObject));
            dispatch(notify("Comment added successfully!"));
        } catch (err) {
            console.log(err);
            dispatch(notify("Comment could not be added..."));
        } finally {
            setValue("");
        }
    };

    return (
        <>
            <InputGroup className="ac-1">
                <InputGroup.Text id="basic-addcomment1">
                    New comment:
                </InputGroup.Text>
                <Form.Control onSubmit={handleAddComment} {...field} />
                <Button variant="dark" id="button1">
                    Add
                </Button>
            </InputGroup>
        </>
    );
};

export default AddComment;
