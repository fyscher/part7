import { useNavigate } from "react-router-dom"
import { useField } from "../hooks"

const CreateNew = (props) =>
{
    const navigate = useNavigate()

    const content = useField('content')
    const author = useField('author')
    const info = useField('info')

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        props.addNew({
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0
        })
        props.setNotification(`a new anecdote ${content.value} created!`)
        navigate('/')
    }

    const handleClick = () =>
    {
        content.reset()
        author.reset()
        info.reset()
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input {...content.input} />
                </div>
                <div>
                    author
                    <input {...author.input} />
                </div>
                <div>
                    url for more info
                    <input {...info.input} />
                </div>
                <button type="submit">create</button>
                <button type="button" onClick={handleClick} >reset</button>
            </form>
        </div>
    )
}

export default CreateNew;
