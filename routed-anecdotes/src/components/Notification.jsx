const Notification = ({ notification, setNotification }) =>
{

    if (notification)
    {
        setTimeout(() => setNotification(null), 5000)
    }
    return(
        <div>
            {notification}
        </div>
    )
}

export default Notification;