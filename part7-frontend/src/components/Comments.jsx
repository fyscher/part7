import { useDispatch, useSelector } from "react-redux";
import { initializeComments } from "../reducers/commentsReducer";
import { useEffect } from "react";

const Comments = ({ id }) => {
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeComments(id));
    }, []);

    return (
        <div>
            <h4>Comments:</h4>
            <ul>
                {comments.map((c) => (
                    <li key={`C_${c.id}`}>{c.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
