import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route,
  Navigate, useMatch
} from 'react-router-dom'
import Menu from './components/Menu'
import About from './components/About'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'
import Home from './components/Home'
import Anecdote from './components/Anecdote'
import Users from './components/Users'
import Login from './components/Login'
import Notification from './components/Notification'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'

const App = () => {

  const Page = styled.div`
    padding: 1rem;
    background: papayawhip;
  `

const Navigation = styled.div`
    background: BurlyWood;
    padding: 1rem;
  `

const FooterDiv = styled.div`
    background: Chocolate;
    padding: 1rem;
    margin-top: 1rem;
  `

  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [user, setUser] = useState('')
  const [notification, setNotification] = useState('')
  const [message, setMessage] = useState(null)


  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const login = (user) =>
  {
    setUser(user)
    setMessage(`Welcome ${user}!`)
    setTimeout(() =>
    {
      setMessage(null)
    }, 5000)
  }

  const match = useMatch('/:id')
  const anecdote = match
    ? anecdotes.find(a => a.id === Number(match.params.id))
    : null

  return (
    <Page>
      <div className='container'>
        {(message &&
            <Alert variant='success'>
              {message}
            </Alert>
        )}
        <h1>Software anecdotes</h1>
        <Navigation><Menu /></Navigation>
        <br/>
        {notification? <Notification notification={notification} setNotification={setNotification} /> : null}
        <Routes>
          <Route path='/:id' element={<Anecdote anecdote={anecdote} />} />
          <Route path="/" element={<Home anecdotes={anecdotes} />} />
          <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" /> } />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification} />} />
          <Route path="/login" element={<Login onLogin={login} />} />
        </Routes>
        <br/>
        <FooterDiv>
          <Footer />
        </FooterDiv>
      </div>
    </Page>
  )
}

export default App
