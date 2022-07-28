import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateListing = () => {
  // I used this as a reference to get the id over: https://stackoverflow.com/questions/72017435/how-can-i-pass-parameters-to-route-with-navigate-function-in-react
  
  let location = useLocation()
  let navigate = useNavigate()

  const initialState = {
    title: `${location.state.id.title}`,
    mood: `${location.state.id.mood}`,
    platform: `${location.state.id.platform}`,
    notes: `${location.state.id.notes}`,
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/api/media/${location.state.id._id}`,
      formState
    )
    console.log(res)
    setFormState(initialState)
    navigate(-1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <input
          type="text"
          placeholder="Title?"
          id="title"
          onChange={handleChange}
          value={formState.title}
        />
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
        </select><br></br>
        <select id="platform" onChange={handleChange} value={formState.platform}>
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
        </select>
        <label htmlFor="notes"></label>
        <textarea
          id="notes"
          placeholder="Any thoughts?"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.notes}
        ></textarea><br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default UpdateListing