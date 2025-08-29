import { Link } from "react-router-dom";

const Home = ({ anecdotes }) =>
{

    return(
        <div>
            <h2>Anecdotes</h2>
            <ul>
                {anecdotes.map(anecdote => 
                    <li key={anecdote.id} >
                        <Link to={`/${anecdote.id}`}>
                            {anecdote.content}
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default Home;
