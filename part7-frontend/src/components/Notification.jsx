import { useSelector } from "react-redux";

const Notification = () => {
    const notification = useSelector(({ notifications }) => notifications);
    return notification === null ? null : <div>{notification}</div>;
};

export default Notification;
