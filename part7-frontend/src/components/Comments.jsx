import { useDispatch, useSelector } from "react-redux";
import { initializeComments } from "../reducers/commentsReducer";
import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Comments = ({ id }) => {
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeComments(id));
    }, []);

    return (
        <div>
            <h4>Comments:</h4>
            <ListGroup>
                {comments.map((c) => (
                    <ListGroup.Item key={`C_${c.id}`}>
                        {c.content}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Comments;
