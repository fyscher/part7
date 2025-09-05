import { useNavigate } from "react-router-dom";
import { Table, Form, Button } from 'react-bootstrap';

const Login = (props) =>
{
    const navigate = useNavigate()

    const onSubmit = (e) =>
    {
        e.preventDefault()
        props.onLogin('fyscher')
        navigate('/')
    }

    return(
        <div>
            <h2>Login</h2>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>username:</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>password:</Form.Label>
                    <Form.Control
                        type="password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;