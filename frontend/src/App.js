import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [issues, setIssues] = useState([])
  const initialState = {
    type: '',
    subject: '',
    message: ''
  }
  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getIssues = async () => {
      try {
        let res = await axios.get('http://localhost3001/issues')
        setIssues(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getIssues()
  }, [])

  useEffect(() => {
    const getIssues = async () => {
      try {
        let res = await axios.get('http://localhost3001/issues')
        setIssues(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getIssues()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  // Event Handler: a callback function to
  // be run when the event is observed
  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/issues', formState)
    console.log(res)
    console.log(formState)
    setFormState(initialState)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="issueType">Type of Issue:</label>
        <select
          id="issueType"
          onChange={handleChange}
          value={formState.issueType}
        >
          <option value="outage">Service Outage</option>
          <option value="billing">Billing</option>
          <option value="cancel">Cancel Service</option>
        </select>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          onChange={handleChange}
          value={formState.subject}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.message}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
