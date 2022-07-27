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
    notes: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [submitted, setSubmitted] = useState(true)

  useEffect(() => {
    const getMedia = async () => {
      try {
        if (submitted) {
          let res = await axios.get('http://localhost:3001/api/media')
          setMedia(res.data)
          setSubmitted(false)
          // formState('')
          // setFormState('')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getMedia()
  }, [submitted])

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
    setSubmitted(true)
    event.target.reset()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={handleChange}
          value={formState.title}
        />
        <br></br>
        <label htmlFor="mood">Ideal for: </label>
        <checkbox id="mood" onChange={handleChange} value={formState.mood}>
          <option>What mood is this ideal for?</option>
          <option value="Spoopy Scaries">Spoopy Scaries</option>
          <option value="Date Night">Date Night</option>
          <option value="Group Watch">Group Watch</option>
          <option value="Background Noise">Background Noise</option>
          <option value="Film School Homework">Film School Homework</option>
          <option value="Stonesy Bonesy">Stonesy Bonesy</option>
        </checkbox>
        <p></p>
        <label htmlFor="platform">Watch it on: </label>
        <input
          type="text"
          id="platform"
          onChange={handleChange}
          value={formState.platform}
        />
        <p></p>
        <label htmlFor="notes">Notes: </label>
        <textarea
          id="notes"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.notes}
        ></textarea>
        <p></p>
        <button type="submit">Send</button>
      </form>
      <h1>Watchr List:</h1>

      <div className="dataList">
        {media.map((media) => (
          <div key={media._id}>
            <h3>Title: {media.title}</h3>
            <p>Mood: {media.mood}</p>
            <p>Platform: {media.platform}</p>
            <p>Notes: {media.notes}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
