import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';

const Home = ({ anecdotes }) =>
{

    return(
        <div>
            <h2>Anecdotes</h2>
            <Table striped>
                <tbody>
                    {anecdotes.map(anecdote => 
                        <tr key={anecdote.id} >
                            <td>
                                <Link to={`/${anecdote.id}`}>
                                    {anecdote.content}
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Home;
