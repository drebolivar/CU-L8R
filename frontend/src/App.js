import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [media, setMedia] = useState([])
  const initialState = {
    title: '',
    mood: '',
    platform: '',
    note: ''
  }
  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getMedia = async () => {
      try {
        let res = await axios.get('http://localhost:3001/api/media')
        setMedia(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMedia()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  // Event Handler: a callback function to
  // be run when the event is observed
  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/api/media', formState)
    console.log(res)
    console.log(formState)
    setFormState(initialState)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={handleChange}
          value={formState.subject}
        />
        <label htmlFor="mood">Mood:</label>
        <select id="mood" onChange={handleChange} value={formState.issueType}>
          <option value="Spoopy">Spoopy</option>
          <option value="Date Night">Date Night</option>
          <option value="Group Watch">Group Watch</option>
          <option value="On Mute">On Mute</option>
        </select>
        <label htmlFor="platform">Platform:</label>
        <input
          type="text"
          id="platform"
          onChange={handleChange}
          value={formState.subject}
        />
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.message}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <h1>Watchr List:</h1>
      {media.map((media) => (
        <div key={media._id}>
          <h3>Title: {media.title}</h3>
          <p>Mood: {media.mood}</p>
          <p>Platform: {media.platform}</p>
          <p>Notes: {media.notes}</p>
        </div>
      ))}
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
