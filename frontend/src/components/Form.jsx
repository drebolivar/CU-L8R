import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'https://cul8r.adaptable.app/'
const Form = () => {
  const [media, setMedia] = useState([])
  const initialState = {
    title: '',
    mood: '',
    platform: '',
    notes: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [submitted, setSubmitted] = useState(true)
  // const [description, setDestription] = useState('')

  useEffect(() => {
    const getMedia = async () => {
      try {
        if (submitted) {
          let res = await axios.get(url + '/api/media')
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(url + '/api/media', formState)
    console.log(res)
    console.log(formState)
    setFormState(initialState)
    setSubmitted(true)
    window.location.reload(false)
  }

  const handleDelete = async (_id) => {
    const res = await axios
      .delete(url + '/api/media/${_id}')
      .catch((error) => console.log(error))
    console.log(res.data.cards)
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <br></br>
        <input
          type="text"
          placeholder="Title?"
          id="title"
          onChange={handleChange}
          value={formState.title}
        />
        <br></br>
        <br></br>
        <label htmlFor="mood"></label>
        <select id="mood" onChange={handleChange} value={formState.mood}>
          <option>What mood is this ideal for?</option>
          <option value="Spoopy Scaries">Spoopy Scaries</option>
          <option value="Date Night">Date Night</option>
          <option value="Group Watch">Group Watch</option>
          <option value="Background Noise">Background Noise</option>
          <option value="Film School Homework">Film School Homework</option>
          <option value="Stonesy Bonesy">Stonesy Bonesy</option>
        </select>
        <br></br>
        <br></br>
        <select
          id="platform"
          onChange={handleChange}
          value={formState.platform}
        >
          <option>Where are you watching?</option>
          <option value="In Theaters">In Theaters</option>
          <option value="Video On Demand">Video On Demand</option>
          <option value="Netflix">Netflix</option>
          <option value="Hulu">Hulu</option>
          <option value="YouTube">YouTube</option>
          <option value="Prime Video">Prime Video</option>
          <option value="Disney+">Disney+</option>
          <option value="Paramount +">Paramount +</option>
          <option value="Shudder">Shudder</option>
          <option value="HBO Max">HBO Max</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="notes"></label>
        <textarea
          id="notes"
          placeholder="Any thoughts?"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.notes}
        ></textarea>
        <br></br>
        <button type="submit">Watch Later</button>
      </form>
      {/* <div className="watchrList">
        <h1>Watchr List:</h1>
        {media.map((media) => (
          <div key={media._id}>
            <h3>Title: {media.title}</h3>
            <p>Mood: {media.mood}</p>
            <p>Platform: {media.platform}</p>
            <p>Notes: {media.notes}</p>
            <button onClick={() => {
              handleDelete(media._id)}}> Delete 
            ></button>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Form
